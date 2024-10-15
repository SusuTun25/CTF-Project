#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LEN 50

void encode(char *str) {
    for (int i = 0; str[i] != '\0'; i++) {
        str[i] = ((str[i] - 32 + 47) % 94) + 32;
    }
}


int verify_password(const char *input) {
    const char encoded_pass[] = "}4=A85C0=34A8B0186C27>;>68BC";
    char password[MAX_LEN];
    
    strcpy(password, encoded_pass);

    return strcmp(input, password) == 0;
}

int main() {
    char input[MAX_LEN];
    char flag[] = "r%uLqpq*0$%t!$0x}0#t't#$tN";

    printf("Welcome to The Enigma Society's initiation challenge.\n");
    printf("Prove your worth by entering the secret passphrase: ");
    fgets(input, MAX_LEN, stdin);
    input[strcspn(input, "\n")] = 0; // Remove newline

    if (verify_password(input)) {
        printf("Impressive! Access granted.\n");
        printf("Your initiation flag, you have to decode it: %s\n", flag);
    } else {
        printf("Access denied. The Enigma Society only accepts the best.\n");
    }

    return 0;
}