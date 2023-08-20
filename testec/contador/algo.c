#include <stdio.h>
#include <stdlib.h>
 
int main(int argc, char* argv[]) {
    FILE *ptr;
    char ch;

    ptr = fopen(argv[1], "r");

    if (NULL == ptr) {
        printf("nao abriu arquivo\n");
    }

    short letras[26];

    for (short i; i <= 26; i++) {
        letras[i] = 0;
    }

    while (ch != EOF) {
        ch = fgetc(ptr);
        if (ch != EOF){
            if (ch > 64 && ch < 91) {
                letras[ch - 65] ++;
            } else if (ch > 96 && ch < 123) {
                letras[ch - 97] ++;
            }
        }
    }

    for (short i = 0; i < 26; i++) {
        printf("%c%d ", i + 97, letras[i]);
    }

    printf("\n");
    fclose(ptr);

    return 0;
}
