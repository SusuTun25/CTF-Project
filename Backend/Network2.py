import requests

# Define the URL of the server (adjust as needed)
url = 'http://localhost:4444'

# Step 1: Send two useless values
data1 = {
    'Red': 'Hi',
    'Blue': 'Bye'
}

# Step 2: Send wrong password
data2 = {
    'username': 'admin',
    'password': 'aewrjoajsdf'
}

# Step 3: Send more useless values
data3 = {
    'Red': 'Lame',
    'Blue': 'Bye'
}

# Step 4: Send correct password
data4 = {
    'username': 'admin',
    'password': 'passwordCTF'
}

# Step 5: Send more useless values
data5 = {
    'Red': '????',
    'Blue': 'HAHA'
}

# Send all data in sequence
print("Sending useless data 1...")
response1 = requests.post(url, data=data1)
print(f"Response: {response1.text}")

print("Sending wrong password...")
response2 = requests.post(url, data=data2)
print(f"Response: {response2.text}")

print("Sending more useless data...")
response3 = requests.post(url, data=data3)
print(f"Response: {response3.text}")

print("Sending correct password...")
response4 = requests.post(url, data=data4)
print(f"Response: {response4.text}")

print("Sending more useless data...")
response5 = requests.post(url, data=data5)
print(f"Response: {response5.text}")
