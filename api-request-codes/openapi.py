import urllib.request

i=0

url = "https://taas.koroad.or.kr/data/rest/accident/riskArea?authKey=ttgHpRe53EBAa21cBuoH%2FSe9w4bDaRrdSvbzPp3xuJazHWbUrMiA6O2NVKJ8Bl09&searchYearCd=2021&siDo=11&guGun=" + str(i)
savename="webResponse" + str(i) + ".xml"
bd=urllib.request.urlopen(url).read()
with open(savename, mode="wt", encoding="utf8") as f: # mode 옆 wb 설명 => w = 쓰기 모드 b = 바이너리 모드
    
    f.write(str(bd))
    #print("저장됨...")


def callfun(j):
    url = "https://taas.koroad.or.kr/data/rest/accident/riskArea?authKey=ttgHpRe53EBAa21cBuoH%2FSe9w4bDaRrdSvbzPp3xuJazHWbUrMiA6O2NVKJ8Bl09&searchYearCd=2021&siDo=11&guGun=" + str(j)
    return urllib.request.urlopen(url).read()



i=680

url = "https://taas.koroad.or.kr/data/rest/accident/riskArea?authKey=ttgHpRe53EBAa21cBuoH%2FSe9w4bDaRrdSvbzPp3xuJazHWbUrMiA6O2NVKJ8Bl09&searchYearCd=2021&siDo=11&guGun=" + str(i)
savename="webResponseAll.xml"
bd=urllib.request.urlopen(url).read()
with open(savename, mode="ab") as f: # mode 옆 wb 설명 => w = 쓰기 모드 b = 바이너리 모드
    
    
    for j in range(681):
        f.write(callfun(j))



