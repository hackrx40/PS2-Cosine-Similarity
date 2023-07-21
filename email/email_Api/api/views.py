from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.views.decorators.csrf import csrf_exempt
import pyrebase
import json

import replicate
import os
os.environ['REPLICATE_API_TOKEN']='r8_3qVVdwlTNa1h7WlGgPQ3ClRXEEzwW2528PQCt'
PROMPT_FOR_MODEL='''
You are to generate a mail to market a health app that is personalized to the user's need.
Create mail to cater to a user with only the following data and do not add any other data:
Age:{age}
City:{city}
Interested Topics: {topics}
Do not make your own conclusions, create only necessary details.
You only have to generate the content of the mail.
'''
DIET_PROMPT_FOR_MODEL='''
Generate a list of Foods that can be prepared using the following Ingredients :
{ingds}

Keep in mind the user has the following Symptoms : 
{Symptoms}

And the following Conditions : 
{cnd}
'''



config={
  'apiKey': "AIzaSyB-XZ68XuIyP4l-ghWgV4Y-dIg4Zw_LVQM",
  'authDomain': "hackrx-pre.firebaseapp.com",
  'databaseURL': "https://hackrx-pre-default-rtdb.asia-southeast1.firebasedatabase.app",
  'projectId': "hackrx-pre",
  'storageBucket': "hackrx-pre.appspot.com",
  'messagingSenderId': "33665546378",
  'appId': "1:33665546378:web:3079bc47ae1b5ce62f1573"
}

db=pyrebase.initialize_app(config)
store=db.storage()

rl_db=db.database()

def email(request):
    if request.method == 'GET':
        htmly = get_template('Email.html')
        subject, from_email, to = 'welcome', 'your_email@gmail.com', email
        d = {'content': 'abc'}
        html_content = htmly.render(d)
        msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return {
            'success': 1
        }

@csrf_exempt
def diet(request):
    if request.method=='POST':
        rl_db.get('')
        data=json.loads(request.body)
        cnds,symds=rl_db.get(data['user_id']).val()['Conditions'],rl_db.get(data['user_id'])['Symptoms']
        if 'text' in data:
            ingds = data['text']
        else:
            ingds = 'random ingredients'
        symds='fever'
        cnds='Diabetes'
        prompt=DIET_PROMPT_FOR_MODEL.format(Symptoms=symds,ingds=ingds, cnd = cnds)

        output = replicate.run(
            "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
            input={"prompt": 
            prompt,'max_length':2000,"temperature":0.75}
        )
        ot=''
        for i in output:
            ot+=i
        return JsonResponse({'output':ot})