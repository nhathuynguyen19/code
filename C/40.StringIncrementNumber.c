#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *incrementNumberIn(char *s) {
	
	// declare result
	char *result;
	result = malloc(sizeof(char) * 10);

	// declare aux var
	char *numberStr;
	numberStr = malloc(sizeof(char) * 10);

	// get index of last char
	int i = strlen(s) - 1;
	for (; i > 0; i--) {
		
		// get char at index i
		char c = s[i];
		
		// if char is not a digit stop loop
		if (c < '0' && c > '9')
			break;

		// concat char to the front of numberStr
		
		int len = strlen(numberStr);
		// update aux string end position
		numberStr[len + 1] = '\0';
		// shift chars of string to the right
		while (len > 0) {
			numberStr[len] = numberStr[len - 1];
			len--;
		}
		// insert new char at first position of aux string
		numberStr[0] = c;
	}

	// string to number
	int number = atoi(numberStr);
	number++;

	// copy substring that does not have numbers
	strncpy(result, s, i + 1); 
	// append an extra zero if necessary
	strcat(result, number < 10 ? "0" : "");

	// convert number into string
	// can reuse numberStr variable
	sprintf(numberStr, "%d", number);
	// copy numberStr to the end of result
	strcat(result, numberStr);

	return result;
}

int main(void) {
	
	char *s = "K02";

	for (int i = 0; i < 20; i++) {
		
		s = incrementNumberIn(s);
		printf("%s\n", s);
	}

	return 0;
}