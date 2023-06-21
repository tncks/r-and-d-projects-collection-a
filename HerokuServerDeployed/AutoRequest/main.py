import time

from timeloop import Timeloop
from datetime import timedelta
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import json
import os
import requests

def get_database():
    from pymongo import MongoClient
    import pymongo

    print('connecting database...')

    
    CONNECTION_STRING = "mongodb+srv://suchan:Piloom01%21%40@cluster0.lykjk.mongodb.net/test"

    
    from pymongo import MongoClient
    client = MongoClient(CONNECTION_STRING)

    print('connecting database...step222')

    
    return client['myDB']

    


tl = Timeloop()

@tl.job(interval=timedelta(seconds=120))
def cronjob():
    
    print("call 120s job current time : {}".format(time.ctime()))
    requests.get('https://bridgeservers.herokuapp.com/posts')
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.headless = True
    
    
    browser = webdriver.Chrome("/usr/bin/chromedriver", options=chrome_options)
    browser.get('https://www.mmu.ac.kr/main/board/301/1') #hasung notice

    li = []
    num = 0

    print("while loop started...")
    while num<43:

        try:
            element = WebDriverWait(browser, 10).until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="content"]/div[3]/table/tbody/tr')))

            time.sleep(1)
        
            elem_list= browser.find_element(
                By.CSS_SELECTOR, "div.board")

            items = elem_list.find_elements(By.XPATH, '//*[@id="content"]/div[3]/table/tbody/tr')

            for item in items:
                no = item.find_element(By.CLASS_NAME, 'no').text
                title = item.find_element(By.CLASS_NAME, 'title').text
                name = item.find_element(By.CLASS_NAME, 'name').text
                date = item.find_element(By.CLASS_NAME, 'date').text
                hit = item.find_element(By.CLASS_NAME, 'hit').text
                link = item.find_element(By.CLASS_NAME, 'title').find_element(By.TAG_NAME, 'a').get_attribute('href')

                if no=="공지":
                    if num > 0:
                        continue
                
                
                li.append({
                    "no": no,
                    "title": title,
                    "name": name,
                    "date": date,
                    "hit": hit,
                    "link": link
                })

                
            
            
            
            num = num + 1
            print(num, end=' ')
            converted_num = ''.join(list(str(num+1)))
            browser.get('https://www.mmu.ac.kr/main/board/301/'+converted_num)
                
    
        except Exception as e:
            print(e, "Main Error in hasung")

    print(".. while loop ended!")
    # Get database
    dbname = get_database()

    collection_name = dbname["boards"]
    x = collection_name.delete_many({})
    print(x.deleted_count, " items deleted successfully.")
    print("Again: Data Insertion of HASUNG board working,, done.")
    collection_name.insert_many(li, ordered=False)



    #----------------------------------------------------------------------
    


    browser.get('https://www.mmu.ac.kr/main/board/302/1') #haksa notice

    haksa_li = []
    num = 0

    print("haksa while loop started...")
    while num<8:

        try:
            element = WebDriverWait(browser, 10).until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="content"]/div[3]/table/tbody/tr')))

            time.sleep(1)
        
            elem_list= browser.find_element(
                By.CSS_SELECTOR, "div.board")

            items = elem_list.find_elements(By.XPATH, '//*[@id="content"]/div[3]/table/tbody/tr')

            for item in items:
                no = item.find_element(By.CLASS_NAME, 'no').text
                title = item.find_element(By.CLASS_NAME, 'title').text
                name = item.find_element(By.CLASS_NAME, 'name').text
                date = item.find_element(By.CLASS_NAME, 'date').text
                hit = item.find_element(By.CLASS_NAME, 'hit').text
                link = item.find_element(By.CLASS_NAME, 'title').find_element(By.TAG_NAME, 'a').get_attribute('href')

                if no=="공지":
                    if num > 0:
                        continue
                
                
                haksa_li.append({
                    "no": no,
                    "title": title,
                    "name": name,
                    "date": date,
                    "hit": hit,
                    "link": link
                })

                
            
            
            
            num = num + 1
            print(num, end=' ')
            converted_num = ''.join(list(str(num+1)))
            browser.get('https://www.mmu.ac.kr/main/board/302/'+converted_num)
                
    
        except Exception as e:
            print(e, "Main Error in haksa")

    print(".. haksa while loop ended!")
    haksa_collection_name = dbname["haksaboards"]
    y = haksa_collection_name.delete_many({})
    print(y.deleted_count, " items deleted successfully.")
    print("Again: Data Insertion of HAKSA board working,, done.")
    haksa_collection_name.insert_many(haksa_li, ordered=False)

    #-----------------------------------------------------------------------

    browser.get('https://www.mmu.ac.kr/main/contents/todayMenu1')
    wj = []
    n = 0
    try:
        temp = []
        element = WebDriverWait(browser, 10).until(EC.presence_of_element_located(
            (By.XPATH, '//*[@id="content"]/div[3]/div/table/tbody/tr')))
        
        time.sleep(1)
        elem_list= browser.find_element(
                By.CSS_SELECTOR, "div.contents812")

        items = elem_list.find_elements(By.XPATH, '//*[@id="content"]/div[3]/div/table/tbody/tr')

        for item in items:
            cols = item.find_elements(By.XPATH, "//*[name()='td']")
            
            i = 0
            for col in cols:
                if i>3:
                    temp.append(col.text)
                
                i = i + 1
            
            print("writing to file..")
            print("step", end='')
            print(n)
            wj.append({
                    "date": temp[0 + 4*n],
                    "m_food": temp[1 + 4*n],
                    "l_food": temp[2 + 4*n],
                    "d_food": temp[3 + 4*n]
                })
            n = n + 1
            if n > 6:
                break
    
        


    except Exception as e:
        print(e, "Main Error")
    
    meal_collection_name = dbname["gongdaemeals"]
    z = meal_collection_name.delete_many({})
    print(z.deleted_count, " items deleted successfully.")
    print("Again: Data Insertion of GONGDAEMEAL board working,, done.")
    meal_collection_name.insert_many(wj, ordered=False)


    #-----------------------------------------------------------------------

    browser.get('https://www.mmu.ac.kr/main/contents/todayMenu2')
    kh = []
    n = 0

    try:
        print("First done.")
        print("Second process of meal starting...")
        temp = []
        element = WebDriverWait(browser, 10).until(EC.presence_of_element_located(
            (By.XPATH, '//*[@id="content"]/div[3]/div/table/tbody/tr')))
        
        time.sleep(1)
        elem_list= browser.find_element(
                By.CSS_SELECTOR, "div.contents812")

        items = elem_list.find_elements(By.XPATH, '//*[@id="content"]/div[3]/div/table/tbody/tr')

        for item in items:
            cols = item.find_elements(By.XPATH, "//*[name()='td']")
            
            
            
            for col in cols:
                temp.append(col.text)
                
                
            
            print("writing to file..")
            print("step", end='')
            print(n)
            kh.append({
                    "date": temp[0 + 4*n],
                    "m_food": temp[1 + 4*n],
                    "l_food": temp[2 + 4*n],
                    "d_food": temp[3 + 4*n]
                })
            n = n + 1
            if n > 6:
                break
        
            


    except Exception as e:
        print(e, "Main Error")
    
    junk_collection_name = dbname["haesadaemeals"]
    w = junk_collection_name.delete_many({})
    print(w.deleted_count, " items deleted successfully.")
    print("Again: Data Insertion of HAESADAEMEAL board working,, done.")
    junk_collection_name.insert_many(kh, ordered=False)
