#include <iostream>

int main(){
    int n = 6, tab[n][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (i == 0 || i == n-1 || j == 0 || j == n-1)
                tab[i][j] = 1;
            else
                tab[i][j] = 0;

    for (int i = 0; i < n; i++){
        for (int j = 0; j < n; j++)
            std::cout << tab[i][j] << " ";
        std::cout << std::endl;
    }
    return 0;
}