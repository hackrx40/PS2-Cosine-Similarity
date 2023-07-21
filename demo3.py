import os
import langchain
print(os.environ['HOME'])
# os.environ["OPENAI_API_KEY"] = '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'

# from langchain.llms import OpenAI
# from langchain import PromptTemplate,LLMChain

# llm=OpenAI()
# template = """Question: {question}

# Answer: Let's think step by step."""
# prompt = PromptTemplate(template=template, input_variables=["question"])
# llm_chain = LLMChain(prompt=prompt, llm=llm)
# question = "What NFL team won the Super Bowl in the year Justin Beiber was born?"

# llm_chain.run(question)