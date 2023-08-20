#include <stdio.h>

int main(int argc, char *argv[]) {
    FILE *ler = fopen(argv[1], "r");
    FILE *escrever = fopen(argv[2], "w");
    char ch = "";
    while (ch != EOF) {
        if (ch > 96 && ch < 123) {
            ch -= 32;
        }
        fprintf(escrever, "%c", ch);
        putchar(ch);
    
        ch = fgetc(ler);
    }

    printf("\n");

    fclose(ler);
    fclose(escrever);

    return 0;
}