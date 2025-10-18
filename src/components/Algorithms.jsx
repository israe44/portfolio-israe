import React, { useState } from 'react';
import { FaSearch, FaCode, FaSort } from 'react-icons/fa';
import './Algorithms.css';

const Algorithms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const algorithms = [
    { 
      id: 1, 
      title: 'Hello World', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Afficher "bonjour" à l\'écran.',
      explanation: 'Premier programme simple pour afficher du texte.',
      solution: `print("bonjour")`
    },
    { 
      id: 2, 
      title: 'Saisir et Afficher l\'Âge', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Demander à l\'utilisateur de saisir son âge et l\'afficher.',
      explanation: 'Utilisation de input() pour lire une entrée et conversion en entier avec int().',
      solution: `n = int(input("écrire votre âge: "))  
print("votre âge est :", n)`
    },
    { 
      id: 3, 
      title: 'Saisir et Afficher le Nom', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Demander le nom de l\'utilisateur et l\'afficher.',
      explanation: 'Lecture d\'une chaîne de caractères avec input().',
      solution: `x = input("Entrez votre nome:" )
print("votre nome est", x)`
    },
    { 
      id: 4, 
      title: 'Afficher Nom et Âge', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Demander le nom et l\'âge puis les afficher ensemble.',
      explanation: 'Combinaison de plusieurs inputs et affichage de plusieurs variables.',
      solution: `x = input("Enter votre age : ")
y = int(x)
x = input("Entrez votre nom:") 
print("votre nom est", x, "et votre age est", y)`
    },
    { 
      id: 5, 
      title: 'Calculer l\'Âge', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Calculer l\'âge en fonction de l\'année de naissance et l\'année actuelle.',
      explanation: 'Opération arithmétique simple pour calculer la différence entre deux années.',
      solution: `c = input("Enter l'annee de naissance : ")
c = int(c)
d = input("Entrez l'annee actuelle : ")
d = int(d) 
age = d - c 
print("Vous avez ", age, " ans")`
    },
    { 
      id: 6, 
      title: 'Moyenne de Deux Nombres', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer la moyenne de deux nombres saisis.',
      explanation: 'Addition de deux nombres puis division par 2 pour obtenir la moyenne.',
      solution: `n = input("Enter nombre 1 : ")
n = int(n)
m = input("Entrez nombre 2 : ")
m = int(m)
h = (n + m) / 2 
print("La moyenne est : ", h)`
    },
    { 
      id: 7, 
      title: 'Moyenne de Trois Nombres', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer la moyenne de trois nombres saisis.',
      explanation: 'Somme de trois nombres divisée par 3.',
      solution: `x = input("Enter nombre 1 : ")
x = int(x)
y = input("Entrez nombre 2 ")
y = int(y)
z = input("Entrez nombre 3 ") 
z = int(z)
d = (x + y + z) / 3 
print("La moyenne est : ", d)`
    },
    { 
      id: 8, 
      title: 'Surface d\'un Rectangle', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer la surface d\'un rectangle (longueur × largeur).',
      explanation: 'Multiplication de deux côtés pour obtenir l\'aire.',
      solution: `l1 = input("Enter nombre 1 : ")
l1 = int(l1)
l2 = input("Entrez nombre 2 :")
l2 = int(l2)
S = l1 * l2
print("La surface de rectangle est : ", S)`
    },
    { 
      id: 9, 
      title: 'Périmètre d\'un Cercle', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer le périmètre d\'un cercle (2πR).',
      explanation: 'Utilisation de la constante Pi pour calculer le périmètre.',
      solution: `Pi = 3.14  
R = float(input("Écrire le rayon: ")) 
S = R * 2 * Pi  
print("Le périmètre du cercle est :", S)`
    },
    { 
      id: 10, 
      title: 'Signe d\'un Nombre', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Déterminer si un nombre est positif, négatif ou nul.',
      explanation: 'Utilisation de conditions if/elif/else pour comparer un nombre à zéro.',
      solution: `n = float(input("Entrer un nombre: "))  
if n > 0:
    print("Positif")  
elif n < 0:
    print("Négatif") 
else:
    print("Null")`
    },
    { 
      id: 11, 
      title: 'Parité d\'un Nombre', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Vérifier si un nombre est pair ou impair.',
      explanation: 'Utilisation de l\'opérateur modulo (%) pour tester la divisibilité par 2.',
      solution: `x = int(input("Entrer un nombre: "))  
if x % 2 == 0:
    print("Paire")  
else:
    print("Impaire")`
    },
    { 
      id: 12, 
      title: 'Produit des Impairs', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Calculer le produit de tous les nombres impairs jusqu\'à N.',
      explanation: 'Boucle for avec condition pour multiplier uniquement les nombres impairs.',
      solution: `S = input("Enter un nombre : ")
P = int(1)
S = int(S)
for i in range(0, S): 
    if i % 2 != 0:
         P = i * P 
print("produit des nmbr impair est", P)`
    },
    { 
      id: 13, 
      title: 'Somme et Produit Pairs/Impairs', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Calculer la somme des impairs et le produit des pairs jusqu\'à N.',
      explanation: 'Boucle avec deux accumulateurs : un pour la somme, un pour le produit.',
      solution: `n = int(input("Saisir un nombre : "))
P = 1  
S = 0  
for i in range(1, n + 1):
    if i % 2 == 0:
        P *= i 
    else:
        S += i  
print("Le produit des nombres pairs est :", P)
print("La somme des nombres impairs est :", S)`
    },
    { 
      id: 14, 
      title: 'Surface d\'un Disque', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer la surface d\'un disque (πR²).',
      explanation: 'Formule mathématique avec Pi et le carré du rayon.',
      solution: `Pi = 3.14 
R = float(input("Entrer le rayon: "))  
S = R * R * Pi  
print("La surface du disque est:", S)`
    },
    { 
      id: 15, 
      title: 'Validation de Note', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Vérifier si une note est validée (≥10) ou non.',
      explanation: 'Condition simple pour comparer une note au seuil de validation.',
      solution: `a = float(input("Entrer une note: "))  
if a >= 10:
    print("Validé")  
else:
    print("Non validé")`
    },
    { 
      id: 16, 
      title: 'Nombre Inversé', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Inverser les chiffres d\'un nombre entier.',
      explanation: 'Utilisation du modulo et division entière pour extraire et reconstruire les chiffres.',
      solution: `x = int(input("Entrer un entier N: ")) 
reversed_n = 0  
while x > 0:
    reversed_n = reversed_n * 10 + (x % 10) 
    x //= 10 
print("Le nombre inversé est:", reversed_n)`
    },
    { 
      id: 17, 
      title: 'Moyenne Pondérée', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer la moyenne pondérée de deux notes (coefficients 2 et 3).',
      explanation: 'Multiplication par les coefficients puis division par la somme des coefficients.',
      solution: `a1 = float(input("Entrer la note module d1 : "))  
a2 = float(input("Entrer la note module d2 : "))
M = ((a1 * 2) + (a2 * 3)) / 5
print("La moyenne est:", M)`
    },
    { 
      id: 18, 
      title: 'Signe et Parité', 
      category: 'conditions',
      difficulty: 'medium',
      problem: 'Déterminer si un nombre est pair/impair et positif/négatif.',
      explanation: 'Combinaison de conditions pour tester le signe et la parité.',
      solution: `e = int(input("saiser un nombre: "))  
if e % 2 == 0 and e > 0:
    print("Paire et positive")
elif e % 2 != 0 and e > 0:
    print("Impaire et positive")
elif e % 2 == 0 and e < 0:
    print("Paire et négative")
else:
    print("Impaire et négative")`
    },
    { 
      id: 19, 
      title: 'Jours de la Semaine', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Afficher le nom du jour en fonction d\'un nombre (1-7).',
      explanation: 'Structure if/elif pour associer un nombre à un jour.',
      solution: `j = int(input("saiser un nombre (1 à 7) : "))
if j == 1:
    print("Lundi")
elif j == 2:
    print("Mardi")
elif j == 3:
    print("Mercredi")
elif j == 4:
    print("Jeudi")
elif j == 5:
    print("Vendredi")
elif j == 6:
    print("Samedi")
elif j == 7:
    print("Dimanche")
else:
    print("Erreur : Nombre invalide")`
    },
    { 
      id: 20, 
      title: 'Équation du Second Degré (Version 1)', 
      category: 'math',
      difficulty: 'hard',
      problem: 'Résoudre une équation du second degré ax² + bx + c = 0.',
      explanation: 'Calcul du discriminant (Δ) et résolution selon trois cas.',
      solution: `import math
e = float(input("Entrer la valeur de a : "))
f = float(input("Entrer la valeur de b : "))
g = float(input("Entrer la valeur de c : "))
delta = f**2 - 4*e*g
if delta < 0:
    print("Pas de solution réelle")
elif delta == 0:
    x1 = -f / (2*e)  
    print("La solution est : ", x1)
else:
    x1 = (-f - math.sqrt(delta)) / (2*e) 
    x2 = (-f + math.sqrt(delta)) / (2*e) 
    print("Les solutions sont : x1 = ", x1, " et x2 = ", x2)`
    },
    { 
      id: 21, 
      title: 'Équation du Second Degré (Version 2)', 
      category: 'math',
      difficulty: 'hard',
      problem: 'Résoudre une équation avec solutions complexes si Δ < 0.',
      explanation: 'Gestion des solutions complexes avec partie réelle et imaginaire.',
      solution: `import math
a = float(input("Entrer la valeur de a : "))
b = float(input("Entrer la valeur de b : "))
c = float(input("Entrer la valeur de c : "))
T = b**2 - 4 * a * c
if T == 0:
    x0 = -b / (2 * a)
    print("La solution est : ", x0)
elif T > 0:
    x1 = (-b - math.sqrt(T)) / (2 * a)
    x2 = (-b + math.sqrt(T)) / (2 * a)
    print("Les solutions sont : x1 =", x1, "et x2 =", x2)
else:
    y = -b / (2 * a)
    z = math.sqrt(-T) / (2 * a)
    print(f"Les solutions sont : {y} - {z}i et {y} + {z}i")`
    },
    { 
      id: 22, 
      title: 'Divisibilité par 2', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Vérifier si un nombre est divisible par 2.',
      explanation: 'Test de divisibilité avec l\'opérateur modulo.',
      solution: `a = int(input("saiser un nombre : "))
if a % 2 == 0:
    print("Le nombre est divisible par 2")
else:
    print("Le nombre n'est pas divisible par 2")`
    },
    { 
      id: 23, 
      title: 'Affichage en Escalier', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Afficher des nombres en forme d\'escalier.',
      explanation: 'Boucles imbriquées pour répéter l\'affichage d\'un nombre.',
      solution: `n = input("entrer a numbre : ")
n = int(n)
for i in range(1, n):
    for j in range(0, i):
      print(i, end="")
    print()`
    },
    { 
      id: 24, 
      title: 'Nombres de 1 à N par Pas de 3', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Afficher tous les nombres de 1 à N avec un pas de 3.',
      explanation: 'Utilisation de range() avec un pas (step) de 3.',
      solution: `x = int(input("Entrer un nombre : "))
for i in range(1, x + 1, 3):
    print(i)`
    },
    { 
      id: 25, 
      title: 'Somme de 1 à N', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Calculer la somme de tous les nombres de 1 à N.',
      explanation: 'Accumulateur dans une boucle pour additionner les nombres.',
      solution: `D = int(input("saiser un nombre : "))
S = 0
for i in range(1, D + 1):
    S += i
print("La somme est:", S)`
    },
    { 
      id: 26, 
      title: 'Produit de 1 à N', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Calculer le produit de tous les nombres de 1 à N-1.',
      explanation: 'Multiplicateur dans une boucle pour calculer le produit.',
      solution: `x = int(input("enter un numbre : "))
p = 1
for i in range(1, x):
    p = p * i
print("la produit est: ", p)`
    },
    { 
      id: 27, 
      title: 'Maximum de Deux Nombres', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Trouver le maximum entre deux nombres.',
      explanation: 'Comparaison simple avec if/else.',
      solution: `a = input("Entrer un nombre: ") 
a = int(a) 
b = input("Entrer un nombre: ") 
b = int(b)
if a > b:
    print(a) 
else: 
    print(b)`
    },
    { 
      id: 28, 
      title: 'Factorielle', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Calculer la factorielle d\'un nombre (N!).',
      explanation: 'Boucle while pour multiplier tous les nombres de 1 à N.',
      solution: `x = int(input("Entrer un nombre: ")) 
i = 1
F = 1
while i <= x:
      F = F * i 
      i += 1 
print(F)`
    },
    { 
      id: 29, 
      title: 'Nombre de Chiffres', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Compter le nombre de chiffres dans un nombre.',
      explanation: 'Division entière répétée par 10 pour supprimer les chiffres.',
      solution: `a = int(input("Enter un nombre : "))
i = 0
while a > 0:
    a = a // 10
    i += 1
print("Nombre de chiffres:", i)`
    },
    { 
      id: 30, 
      title: 'Multiples de 3 dans un Intervalle', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Compter les multiples de 3 entre deux nombres.',
      explanation: 'Boucle avec compteur et test de divisibilité par 3.',
      solution: `x = int(input("Entrer un nombre: "))
y = int(input("Entrer un nombre: "))
j = 0
for i in range(x, y):
    if i % 3 == 0:
        j += 1
print(j)`
    },
    { 
      id: 31, 
      title: 'Nombre Premier', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Vérifier si un nombre est premier.',
      explanation: 'Comptage des diviseurs : un nombre premier a exactement 2 diviseurs.',
      solution: `a = int(input("Enter un nombre : "))
j = 0
for i in range(1, a + 1):
    if a % i == 0:
        j += 1
if j > 2:
    print("le nombre n'est pas premier") 
else:
    print("le nombre est premier")`
    },
    { 
      id: 32, 
      title: 'Triangle d\'Étoiles', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Afficher un triangle d\'étoiles croissant.',
      explanation: 'Boucles imbriquées : ligne i contient i étoiles.',
      solution: `x = int(input("Entrer un nombre: "))
for i in range(1, x + 1):
    for j in range(1, i + 1):
        print("*", end="")
    print()`
    },
    { 
      id: 33, 
      title: 'Triangle d\'Étoiles Inversé', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Afficher un triangle d\'étoiles décroissant.',
      explanation: 'Boucles imbriquées en ordre décroissant.',
      solution: `x = int(input("Entrer un nombre: "))
for i in range(x, 1, -1):
    for j in range(i, 1, -1):
        print("*", end="")
    print()`
    },
    { 
      id: 34, 
      title: 'Table de Multiplication', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Afficher la table de multiplication d\'un nombre.',
      explanation: 'Boucle while de 1 à 10 pour multiplier le nombre.',
      solution: `a = int(input("Enter un nombre : "))
i = 1
while i <= 10:
    print(a, "x", i, "=", a * i)
    i += 1`
    },
    { 
      id: 35, 
      title: 'Table de Multiplication de 7', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Afficher la table de multiplication de 7.',
      explanation: 'Boucle for simple pour afficher 7×1 à 7×9.',
      solution: `for i in range(1, 10):
    print("7 x", i, "=", 7 * i)`
    },
    { 
      id: 36, 
      title: 'Tableau de 10 Entiers', 
      category: 'array',
      difficulty: 'easy',
      problem: 'Stocker et afficher 10 entiers dans un tableau.',
      explanation: 'Utilisation d\'une liste (array) avec append() et affichage par boucle.',
      solution: `t = []
for i in range(0, 10):
    t.append(input("Enter un nombre: "))
for i in range(0, 10):
    print("la valeur de t[", i, "] est:", t[i])`
    },
    { 
      id: 37, 
      title: 'Somme d\'une Suite', 
      category: 'array',
      difficulty: 'easy',
      problem: 'Calculer la somme des éléments d\'un tableau.',
      explanation: 'Accumulation pendant la saisie des éléments.',
      solution: `t = []
S = 0
for i in range(0, 10):
    val = int(input("Enter un nombre: "))
    t.append(val)
    S = S + val
print("la somme de la suite est:", S)`
    },
    { 
      id: 38, 
      title: 'Maximum d\'un Tableau', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Trouver le maximum dans un tableau de 5 éléments.',
      explanation: 'Comparaison successive des éléments avec un maximum temporaire.',
      solution: `t = []
for i in range(0, 5):
    t.append(int(input("Enter un number: ")))
max = t[0]
for i in range(1, 5):
    if t[i] > max:
        max = t[i]
print("le maximum est: ", max)`
    },
    { 
      id: 39, 
      title: 'Maximum et Minimum d\'un Tableau', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Trouver le maximum et le minimum dans un tableau de 10 éléments.',
      explanation: 'Deux comparaisons simultanées pour trouver max et min.',
      solution: `t = []
for i in range(0, 10):
    t.append(int(input("Enter un number: ")))
max = t[0]
min = t[0]
for i in range(1, 10):
    if t[i] > max:
        max = t[i]
    if t[i] < min:
        min = t[i]
print("le maximum est: ", max)
print("le minimum est: ", min)`
    },
    { 
      id: 40, 
      title: 'Minimum d\'un Tableau', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Trouver le minimum dans un tableau de 5 éléments.',
      explanation: 'Recherche du plus petit élément par comparaisons successives.',
      solution: `t = []
for i in range(0, 5):
    t.append(int(input("Enter un number: ")))
min = t[0]
for i in range(0, 5):
    if t[i] < min:
        min = t[i]
print("le minimum est: ", min)`
    },
    { 
      id: 41, 
      title: 'Nombres Pairs d\'un Tableau', 
      category: 'array',
      difficulty: 'easy',
      problem: 'Afficher uniquement les nombres pairs d\'un tableau.',
      explanation: 'Parcours du tableau avec test de parité pour chaque élément.',
      solution: `t = []
for i in range(0, 5):
    t.append(int(input("Enter un nombre: ")))
for i in range(0, 5):
    if t[i] % 2 == 0:
        print(t[i])`
    },
    { 
      id: 42, 
      title: 'Nombres Impairs d\'un Tableau', 
      category: 'array',
      difficulty: 'easy',
      problem: 'Afficher uniquement les nombres impairs d\'un tableau.',
      explanation: 'Parcours avec test d\'imparité (modulo 2 différent de 0).',
      solution: `t = []
for i in range(0, 5):
    t.append(int(input("Enter un nombre: ")))
for i in range(0, 5):
    if t[i] % 2 != 0:
        print(t[i])`
    },
    { 
      id: 43, 
      title: 'Compter Pairs et Impairs', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Compter le nombre d\'éléments pairs et impairs dans un tableau.',
      explanation: 'Deux compteurs pour séparer les pairs et impairs.',
      solution: `t = []
pairs = 0
impairs = 0
for i in range(0, 10):
    t.append(int(input("Enter un nombre: ")))
    if t[i] % 2 == 0:
        pairs += 1
    else:
        impairs += 1
print("Pairs:", pairs, "Impairs:", impairs)`
    },
    { 
      id: 44, 
      title: 'Carré des Nombres', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Afficher le carré de tous les nombres de 1 à N.',
      explanation: 'Boucle simple avec calcul du carré (i²).',
      solution: `n = int(input("Entrer un nombre: "))
for i in range(1, n + 1):
    print(i, "² =", i * i)`
    },
    { 
      id: 45, 
      title: 'Suite de Fibonacci', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Afficher les N premiers termes de la suite de Fibonacci.',
      explanation: 'Chaque terme est la somme des deux précédents.',
      solution: `n = int(input("Combien de termes? "))
a, b = 0, 1
for i in range(n):
    print(a, end=" ")
    a, b = b, a + b`
    },
    { 
      id: 46, 
      title: 'Somme des Carrés', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Calculer la somme des carrés de 1 à N.',
      explanation: 'Addition successive des carrés dans un accumulateur.',
      solution: `n = int(input("Entrer un nombre: "))
somme = 0
for i in range(1, n + 1):
    somme += i * i
print("Somme des carrés:", somme)`
    },
    { 
      id: 47, 
      title: 'PGCD de Deux Nombres', 
      category: 'math',
      difficulty: 'hard',
      problem: 'Calculer le PGCD (Plus Grand Commun Diviseur) de deux nombres.',
      explanation: 'Algorithme d\'Euclide : division successive jusqu\'à reste nul.',
      solution: `a = int(input("Premier nombre: "))
b = int(input("Deuxième nombre: "))
while b != 0:
    a, b = b, a % b
print("PGCD:", a)`
    },
    { 
      id: 48, 
      title: 'Conversion Celsius vers Fahrenheit', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Convertir une température de Celsius en Fahrenheit.',
      explanation: 'Formule: F = (C × 9/5) + 32.',
      solution: `celsius = float(input("Température en Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print("Température en Fahrenheit:", fahrenheit)`
    },
    { 
      id: 49, 
      title: 'Palindrome', 
      category: 'string',
      difficulty: 'medium',
      problem: 'Vérifier si un mot est un palindrome.',
      explanation: 'Comparaison du mot avec son inverse.',
      solution: `mot = input("Entrer un mot: ")
if mot == mot[::-1]:
    print("Palindrome")
else:
    print("Pas un palindrome")`
    },
    { 
      id: 50, 
      title: 'Compter les Voyelles', 
      category: 'string',
      difficulty: 'medium',
      problem: 'Compter le nombre de voyelles dans une chaîne.',
      explanation: 'Parcours de la chaîne et comptage des voyelles.',
      solution: `texte = input("Entrer un texte: ")
voyelles = "aeiouAEIOU"
compteur = 0
for char in texte:
    if char in voyelles:
        compteur += 1
print("Nombre de voyelles:", compteur)`
    },
    { 
      id: 51, 
      title: 'Inverser un Tableau', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Inverser l\'ordre des éléments d\'un tableau.',
      explanation: 'Échange des éléments de début et fin progressivement.',
      solution: `t = []
for i in range(5):
    t.append(int(input("Enter un nombre: ")))
t.reverse()
print("Tableau inversé:", t)`
    },
    { 
      id: 52, 
      title: 'Tri à Bulles', 
      category: 'sorting',
      difficulty: 'hard',
      problem: 'Trier un tableau avec l\'algorithme du tri à bulles.',
      explanation: 'Comparaisons successives et échanges des éléments adjacents.',
      solution: `t = [64, 34, 25, 12, 22, 11, 90]
n = len(t)
for i in range(n):
    for j in range(0, n - i - 1):
        if t[j] > t[j + 1]:
            t[j], t[j + 1] = t[j + 1], t[j]
print("Tableau trié:", t)`
    },
    { 
      id: 53, 
      title: 'Recherche Linéaire', 
      category: 'search',
      difficulty: 'easy',
      problem: 'Rechercher un élément dans un tableau (recherche linéaire).',
      explanation: 'Parcours séquentiel du tableau jusqu\'à trouver l\'élément.',
      solution: `t = [10, 23, 45, 70, 11, 15]
x = int(input("Nombre à rechercher: "))
trouve = False
for i in range(len(t)):
    if t[i] == x:
        print("Trouvé à l'index", i)
        trouve = True
        break
if not trouve:
    print("Non trouvé")`
    },
    { 
      id: 54, 
      title: 'Somme de Deux Tableaux', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Additionner élément par élément deux tableaux de même taille.',
      explanation: 'Création d\'un nouveau tableau contenant les sommes.',
      solution: `t1 = [1, 2, 3, 4, 5]
t2 = [5, 4, 3, 2, 1]
resultat = []
for i in range(len(t1)):
    resultat.append(t1[i] + t2[i])
print("Résultat:", resultat)`
    },
    { 
      id: 55, 
      title: 'Moyenne d\'un Tableau', 
      category: 'array',
      difficulty: 'easy',
      problem: 'Calculer la moyenne des éléments d\'un tableau.',
      explanation: 'Somme divisée par le nombre d\'éléments.',
      solution: `t = []
for i in range(5):
    t.append(int(input("Enter un nombre: ")))
moyenne = sum(t) / len(t)
print("Moyenne:", moyenne)`
    },
    { 
      id: 56, 
      title: 'Nombre Parfait', 
      category: 'loops',
      difficulty: 'hard',
      problem: 'Vérifier si un nombre est parfait (égal à la somme de ses diviseurs).',
      explanation: 'Un nombre parfait égale la somme de ses diviseurs propres (ex: 6 = 1+2+3).',
      solution: `n = int(input("Entrer un nombre: "))
somme = 0
for i in range(1, n):
    if n % i == 0:
        somme += i
if somme == n:
    print("Nombre parfait")
else:
    print("Pas un nombre parfait")`
    },
    { 
      id: 57, 
      title: 'Puissance d\'un Nombre', 
      category: 'math',
      difficulty: 'easy',
      problem: 'Calculer la puissance d\'un nombre (a^b).',
      explanation: 'Multiplication répétée ou utilisation de l\'opérateur **.',
      solution: `a = int(input("Base: "))
b = int(input("Exposant: "))
resultat = a ** b
print(a, "puissance", b, "=", resultat)`
    },
    { 
      id: 58, 
      title: 'Série Géométrique', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Calculer la somme d\'une série géométrique (1 + r + r² + ... + r^n).',
      explanation: 'Accumulation des puissances successives de r.',
      solution: `r = float(input("Raison: "))
n = int(input("Nombre de termes: "))
somme = 0
for i in range(n + 1):
    somme += r ** i
print("Somme:", somme)`
    },
    { 
      id: 59, 
      title: 'Compter Chiffres Pairs', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Compter combien de chiffres pairs contient un nombre.',
      explanation: 'Extraction des chiffres et test de parité.',
      solution: `n = int(input("Entrer un nombre: "))
compteur = 0
while n > 0:
    chiffre = n % 10
    if chiffre % 2 == 0:
        compteur += 1
    n //= 10
print("Chiffres pairs:", compteur)`
    },
    { 
      id: 60, 
      title: 'Somme des Chiffres', 
      category: 'loops',
      difficulty: 'easy',
      problem: 'Calculer la somme des chiffres d\'un nombre.',
      explanation: 'Extraction et addition de chaque chiffre.',
      solution: `n = int(input("Entrer un nombre: "))
somme = 0
while n > 0:
    somme += n % 10
    n //= 10
print("Somme des chiffres:", somme)`
    },
    { 
      id: 61, 
      title: 'Plus Grand Élément et Position', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Trouver le plus grand élément et sa position dans un tableau.',
      explanation: 'Mémorisation de la valeur maximale et de son index.',
      solution: `t = [12, 45, 67, 23, 89, 34]
max_val = t[0]
max_pos = 0
for i in range(1, len(t)):
    if t[i] > max_val:
        max_val = t[i]
        max_pos = i
print("Max:", max_val, "à la position", max_pos)`
    },
    { 
      id: 62, 
      title: 'Doublons dans un Tableau', 
      category: 'array',
      difficulty: 'hard',
      problem: 'Trouver et afficher les éléments dupliqués dans un tableau.',
      explanation: 'Comparaison de chaque élément avec les suivants.',
      solution: `t = [1, 2, 3, 2, 4, 5, 1, 6]
doublons = []
for i in range(len(t)):
    for j in range(i + 1, len(t)):
        if t[i] == t[j] and t[i] not in doublons:
            doublons.append(t[i])
print("Doublons:", doublons)`
    },
    { 
      id: 63, 
      title: 'Armstrong Number', 
      category: 'loops',
      difficulty: 'hard',
      problem: 'Vérifier si un nombre est un nombre d\'Armstrong (somme des cubes = nombre).',
      explanation: 'Un nombre d\'Armstrong: 153 = 1³ + 5³ + 3³.',
      solution: `n = int(input("Entrer un nombre: "))
temp = n
somme = 0
while temp > 0:
    chiffre = temp % 10
    somme += chiffre ** 3
    temp //= 10
if somme == n:
    print("Nombre d'Armstrong")
else:
    print("Pas un nombre d'Armstrong")`
    },
    { 
      id: 64, 
      title: 'Longueur d\'une Chaîne', 
      category: 'string',
      difficulty: 'easy',
      problem: 'Calculer la longueur d\'une chaîne sans utiliser len().',
      explanation: 'Comptage manuel des caractères avec une boucle.',
      solution: `texte = input("Entrer un texte: ")
compteur = 0
for char in texte:
    compteur += 1
print("Longueur:", compteur)`
    },
    { 
      id: 65, 
      title: 'Concaténation de Chaînes', 
      category: 'string',
      difficulty: 'easy',
      problem: 'Concaténer deux chaînes de caractères.',
      explanation: 'Union de deux strings avec l\'opérateur +.',
      solution: `s1 = input("Première chaîne: ")
s2 = input("Deuxième chaîne: ")
resultat = s1 + s2
print("Résultat:", resultat)`
    },
    { 
      id: 66, 
      title: 'Majuscules et Minuscules', 
      category: 'string',
      difficulty: 'easy',
      problem: 'Convertir une chaîne en majuscules et en minuscules.',
      explanation: 'Utilisation des méthodes upper() et lower().',
      solution: `texte = input("Entrer un texte: ")
print("Majuscules:", texte.upper())
print("Minuscules:", texte.lower())`
    },
    { 
      id: 67, 
      title: 'Remplacer un Caractère', 
      category: 'string',
      difficulty: 'easy',
      problem: 'Remplacer toutes les occurrences d\'un caractère dans une chaîne.',
      explanation: 'Utilisation de la méthode replace().',
      solution: `texte = input("Entrer un texte: ")
ancien = input("Caractère à remplacer: ")
nouveau = input("Nouveau caractère: ")
resultat = texte.replace(ancien, nouveau)
print("Résultat:", resultat)`
    },
    { 
      id: 68, 
      title: 'Nombres Premiers jusqu\'à N', 
      category: 'loops',
      difficulty: 'hard',
      problem: 'Afficher tous les nombres premiers de 2 à N.',
      explanation: 'Vérification de primalité pour chaque nombre.',
      solution: `n = int(input("Entrer un nombre: "))
for num in range(2, n + 1):
    est_premier = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            est_premier = False
            break
    if est_premier:
        print(num, end=" ")`
    },
    { 
      id: 69, 
      title: 'Carré Magique 3x3', 
      category: 'array',
      difficulty: 'hard',
      problem: 'Vérifier si une matrice 3x3 est un carré magique.',
      explanation: 'Toutes les lignes, colonnes et diagonales ont la même somme.',
      solution: `m = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
s = sum(m[0])
magique = True
for ligne in m:
    if sum(ligne) != s:
        magique = False
for col in range(3):
    if sum(m[i][col] for i in range(3)) != s:
        magique = False
print("Carré magique" if magique else "Pas magique")`
    },
    { 
      id: 70, 
      title: 'Rotation d\'un Tableau', 
      category: 'array',
      difficulty: 'medium',
      problem: 'Effectuer une rotation circulaire d\'un tableau vers la droite.',
      explanation: 'Déplacement des éléments avec gestion du dernier qui devient premier.',
      solution: `t = [1, 2, 3, 4, 5]
k = int(input("Nombre de rotations: "))
for _ in range(k):
    dernier = t.pop()
    t.insert(0, dernier)
print("Tableau après rotation:", t)`
    }
  ];

  const categories = ['all', 'basics', 'math', 'conditions', 'loops', 'array', 'string', 'sorting', 'search'];

  const filteredAlgorithms = algorithms.filter(algo => 
    algo.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || algo.category === selectedCategory)
  );

  return (
    <div className="algorithms page">
      <div className="container">
        <h1 className="page-title">Algorithm Exercises</h1>
        <p className="page-subtitle">70 exercices Python avec solutions</p>
        
        <div className="algorithms-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher des exercices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-group">
            <FaSort className="filter-icon" />
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">Toutes les Catégories</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="exercises-count">
          {filteredAlgorithms.length} sur {algorithms.length} exercices
        </div>

        <div className="algorithms-grid">
          {filteredAlgorithms.map(algo => (
            <div key={algo.id} className="algorithm-card card">
              <div className="exercise-number">
                #{algo.id.toString().padStart(3, '0')}
              </div>
              
              <div className="algorithm-header">
                <FaCode className="algorithm-icon" />
                <h3 className="algorithm-title">{algo.title}</h3>
                <span className={`difficulty-badge ${algo.difficulty}`}>
                  {algo.difficulty}
                </span>
              </div>
              
              <div className="problem-section">
                <h4>Problème</h4>
                <p className="problem-text">{algo.problem}</p>
              </div>

              <div className="problem-section">
                <h4>Explication</h4>
                <p className="problem-text">{algo.explanation}</p>
              </div>
              
              <div className="solution-section">
                <h4>Solution</h4>
                <div className="algorithm-code">
                  <pre><code>{algo.solution}</code></pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlgorithms.length === 0 && (
          <div className="empty-state">
            <FaCode className="empty-icon" />
            <h3>Aucun exercice trouvé</h3>
            <p>Essayez de changer votre recherche ou filtre</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Algorithms;