#include <stdio.h>
int Encrypt(int, int);
int Decrypt(int, int);
int main()
{
	int salt, len, select, i, j, code, num;
	char text[26], letter;

	printf("this program is to encode or decode cipher text\n\n");
	printf("enter the text:\t");
	gets(text);

	printf("enter the value of salt:\t");
	scanf("%d", &salt);

	len = strlen(text);
	printf("length of string is : %d\n\n", len);

	printf("Choose the Operation you want to perform\n\tEnter 1 for Encryption\n\tEnter 2 for Decryption\n");
	scanf("%d", &select);
	if (select == 1)
	{

		for (i = 0; i < len; i++)
		{
			letter = text[i];
			num = letter;
			if (num != 32 && num > 90)
			{
				num -= 32;
				code = Encrypt(num, salt); // call function
				code += 32;

				printf("%c", code);
			}
			else if (num == 32)
			{
				code = num;
				printf("%c", code);
			}
			else
			{

				code = Encrypt(num, salt); // call function
				printf("%c", code);
			}
			//
		}
	}
	else if (select == 2)
	{
		for (i = 0; i < len; i++)
		{
			letter = text[i];
			num = letter;

			if (num > 90)
			{
				num -= 32;
				code = Decrypt(num, salt); // call function
				code += 32;

				printf("%c", code);
			}
			else if (num == 32)
			{
				code = num;
				printf("%c", code);
			}
			else
			{

				code = Decrypt(num, salt); // call function
				printf("%c", code);
			}
			//
		}
	}
	else
	{
		printf("Invalid input..:(");
	}
}

int Encrypt(value, shift)
{ // function for encryption

	value -= 65;
	value = (value + shift) % 26;

	return value += 65;
}
int Decrypt(value, shift)
{ // function for decryption
	int temp;

	value -= 65;
	temp = (shift % 26) * (-1);

	value = value - (-temp);
	if (value < 0)
	{
		value = value + 26;

		return value += 65;
	}
	else
	{

		return value += 65;
	}

	return value += 65;
}
