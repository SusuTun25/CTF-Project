import socket

# Connect to the server and receive the flag
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 4444))

data = client_socket.recv(1024)
print(f"Received: {data.decode()}")
client_socket.close()
