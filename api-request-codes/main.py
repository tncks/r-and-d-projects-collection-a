import urllib.request
i=0
stri=str(i)
url = "https://taas.koroad.or.kr/data/rest/accident/riskArea?authKey=ttgHpRe53EBAa21cBuoH%2FSe9w4bDaRrdSvbzPp3xuJazHWbUrMiA6O2NVKJ8Bl09&searchYearCd=2021&siDo=11&guGun=" + stri
savename="webResponse" + stri(i) + ".txt"
bd=urllib.request.urlopen(url).read()
with open(savename, mode="wt") as f: # mode 옆 wb 설명 => w = 쓰기 모드 b = 바이너리 모드
    
    f.write(bd)
    #print("저장됨...")

"""
i=680
stri=str(680)
url = "https://taas.koroad.or.kr/data/rest/accident/riskArea?authKey=ttgHpRe53EBAa21cBuoH%2FSe9w4bDaRrdSvbzPp3xuJazHWbUrMiA6O2NVKJ8Bl09&searchYearCd=2021&siDo=11&guGun=" + stri
savename="webResponse" + stri(i) + ".txt"
bd=urllib.request.urlopen(url).read()
with open(savename, mode="wt") as f: # mode 옆 wb 설명 => w = 쓰기 모드 b = 바이너리 모드
    
    f.write(bd)"""
    #print("저장됨...")