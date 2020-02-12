using System;

public static class ReverseString {
    public static string Reverse(string input) {
        string aux = "";
        for(int i = input.Length-1; i >= 0; i--){
            aux += input[i];
        }
        return aux;
    }
}
