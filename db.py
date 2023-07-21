import pyrebase
import pandas as pd

config={
  'apiKey': "AIzaSyB-XZ68XuIyP4l-ghWgV4Y-dIg4Zw_LVQM",
  'authDomain': "hackrx-pre.firebaseapp.com",
  'databaseURL': "https://hackrx-pre-default-rtdb.asia-southeast1.firebasedatabase.app",
  'projectId': "hackrx-pre",
  'storageBucket': "hackrx-pre.appspot.com",
  'messagingSenderId': "33665546378",
  'appId': "1:33665546378:web:3079bc47ae1b5ce62f1573"
}

init=pyrebase.initialize_app(config)
db=init.database()
data=pd.read_csv("D:\\project\\pre_personalized\\User_details.csv")
push_data=dict()

for i in range(data.shape[0]):
    temp=data.iloc[i]
    key=str(temp['Customer ID'])
    push_data[key]=dict()
    push_data[key]['Email']='jilomo8816@rc3s.com'
    for j in temp.keys():
        if j=='Customer ID':
            continue
        if j=='Articles':
            #print(str(temp[j]).split())
            push_data[key][j]=str(temp[j]).split()
            continue
        push_data[key][j]=str(temp[j])

print(push_data)
db.child('user_data').set(push_data)