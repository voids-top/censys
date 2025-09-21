import requests
import re
import os
import tls_client
import traceback
import time

session = tls_client.Session(
    client_identifier="safari_ios_16_0",
)
session.headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    # 'cookie': 'cf_clearance=0WlVdpr1TTNzDK6kPgoU94jjQE1aW8Ss94gcRxU91vY-1758458344-1.2.1.1-aA3sV2IMAPbhI8WWFvBEklnwI9r49Km.DOPckM.TwDN6sBs2HeuofJcb.sgnUan9OANP77BBUpFmtpMAbmQVoXkfzdTaAh.KgDq3aAFE2FgFqX.n3IONiNbddMVzbvd7bh2KfiMel7ne1XCAR7mtAUOrMZX0KHbENnAcUNFlRvDdATa_dt3eFooQEc7XORMI77g5b7nFdiZTofih8znFcAa3MG3EzIoOXClfm0xx.Ug; auth_v1=MTc1ODQ1ODM1M3xnaWRJNVJ2Z09URVlXU0J2ZTBHeFZrN1BqWVF0WmtmZUNFaXdEdVZlMVkxN2Foam1mS2E5QjJvV1pVR3ltaUpIRWZpSlQzbUhtY1ZRS1hCQVBrMUtwMzM0RmpJWUdtc1Y2WFR5TkZRaDVSbktOYmJ1bUN1SzZtZjZpT1JTOFFSZzNvZWhHQjM2WlRlUXYtc3V3RTBXUExMMzNRd3FwTE1XNFBkUjg2MUlKTmRmQkdTcVNyOWdLVXM1anZWdExDZEZTYUJ2SlBvbTZ1V1hOTkFnV1ctVlM0WjRzaTFMYmVtdWhoUk9rZWcyMWFZWHZkWmEwRDU3NnJDTkEtRnFJUUxsTGpXOTREcUw1YjQxdW9GbTJ2dz18yW9xvAocwAzgtHNESxKjOvaBVK3enpNCDYVy1S07z7U=; __cf_bm=lzng0Z4G6p0YahjESH1rGAP_BcBvvpw_xaZeC7LFq_c-1758458354-1.0.1.1-AuCMJLmKJDzGUCel5LQaH6T0.tXfZNYRnZqGxnwr1EGxQaKv34ZyTsYAoV2I2VIcqlfg76BBJVWpanKjmrICC9YmdBQzmt7GVwfUj4jHNKc; csrf=InBvOWNxelM3UXQ3cGl0SW1XNGtfNEZkWWViLW0xbXNwT3VLNW1qUnp0eEkuVkJLYW9kZnJJZUtUTmhGMkx1OVktaUNfSDEtb1U0V0c0OFpKWTdvb3M4NCI%3D.mgywVSiBJFF5k87bXwFlPH9sBcWWgM9w9edDanaXn68',
}
html = open("index.html", "r", encoding="utf-8").read()

base_url = "https://platform.censys.io"
cdn_regex = r"/build/[a-zA-Z0-9\-_/\.]+"
module_regex = r"/[a-zA-Z0-9\-_\.]+\.js"
urls = set()
done = set()

for match in re.findall(cdn_regex, html):
    urls.add(base_url + match)

while True:
    if not urls:
        break
    url = urls.pop()
    if url in done:
        continue
    if not "/build" in url:
        continue
    r = session.get(url)
    attempt = 0
    while r.status_code == 403:
        if attempt > 10:
            print(403, url)
            break
        r = session.get(url)
        attempt += 1
        time.sleep(1)
    print(url)
    if r.status_code != 200:
        continue
    src = r.content
    path = url.split(base_url)[1][1:].split("/")
    for n in range(1, len(path)):
        try:
            os.mkdir("/".join(path[0:n]))
        except:
            pass
    open(url.split(base_url)[1][1:], "wb").write(src)
    for module in re.findall(module_regex, src.decode("utf-8")):
        module = base_url + module
        if not module in done:
            urls.add(module)
    done.add(url)