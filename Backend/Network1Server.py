import socket

# Create a server that listens on port 4444
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('0.0.0.0', 4444))
server_socket.listen(1)

print("Server is listening on port 4444...")
conn, addr = server_socket.accept()
print(f"Connection from {addr}")

# Send the flag to the client
flag = "FLAG{NetworkTrafficSniffer}"
conn.sendall(flag.encode())
conn.close()
server_socket.close()
