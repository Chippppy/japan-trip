import os

x = 33

for i in os.listdir("/Users/hchip/Desktop/JAPAN/FUJI/29"):
  print(i)
  if(i.endswith(".JPG") or i.endswith(".jpeg")):
    xPath = "/Users/hchip/Desktop/JAPAN/FUJI/29/"+str(x)+".JPG"
    print(xPath)
    os.rename("/Users/hchip/Desktop/JAPAN/FUJI/29/"+i, xPath)
    x+=1