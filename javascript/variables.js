> let email = "sesugh@gmail.com"
> email
'sesugh@gmail.com'
> email.length
16
> "Hello Lab 5! how are you guys doing today?".length
42
> let str = "Hello Lab 5! how are you guys doing today?"
undefined
> str
'Hello Lab 5! how are you guys doing today?'
> email.split('@')
[ 'sesugh', 'gmail.com' ]
> email.split('@')[0]
'sesugh'
>  "Hello God @ Are you happy @ Can you hear us @ when we called".split('@')
[
  'Hello God ',
  ' Are you happy ',
  ' Can you hear us ',
  ' when we called'
]
> "Mango*Apple*Orange*Watermelon".split('*')
[ 'Mango', 'Apple', 'Orange', 'Watermelon' ]
> "Hello world".split('')
[
  'H', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
> "Hello world".split(' ')
[ 'Hello', 'world' ]
> let fruits = "Mango*Apple*Orange*Watermelon".split('*')
undefined
> fruits
[ 'Mango', 'Apple', 'Orange', 'Watermelon' ]
> fruits.length
4
> let hello = "Hello world".split('')
undefined
> hello.length
11
> hello
[
  'H', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
> "Hello world".replace(' ', '-')
'Hello-world'
> let newEmail = email.replace('@', '*')
undefined
> newEmail
'sesugh*gmail.com'
> email.chatAt(1)
Uncaught TypeError: email.chatAt is not a function
> let hey = "hello world"
undefined
> hey.endsWith('d')
> hey.endsWith('d')
> hey.endsWith('d')
> hey.endsWith('d')
> hey.endsWith('d')
> hey.endsWith('world')
true
> hey.endsWith('world')
true
> email.concat(hey)
'sesugh@gmail.comhello world'
> email+hey
'sesugh@gmail.comhello world'
> email+' '+hey
'sesugh@gmail.com hello world'
> email.concat(' ').concat(hey)
'sesugh@gmail.com hello world'
> hey * email
NaN
> hey.slice(:1)
hey.slice(:1)
          ^

Uncaught SyntaxError: Unexpected token ':'
> let username = email.slice(0, 6)
undefined
> username
'sesugh'
> "helo hello yello".replace(' ', '-')
'helo-hello yello'
> "helo hello yello".replaceAll(' ', '-')
'helo-hello-yello'
> "helo hello yello".substr(1,6)
'elo he'
> var name = null
undefined
> name
null
>  typeof(username)
'string'
> let p = 8
undefined
> typeof(p)
'number'
> let p = 9.5
Uncaught SyntaxError: Identifier 'p' has already been declared
> p = 9.5
9.5
> typeof(p)
'number'
> p = false
false
> typeof(p)
'boolean'
> p= null
null
> typeof(p)
'object'
> p= ''
''
> typeof(p)
'string'
> p= undefined
undefined
> typeof(p)
'undefined'
> typeof(0)
'number'
> null === undefined
false
> null = undefined
null = undefined
^^^^

Uncaught SyntaxError: Invalid left-hand side in assignment
> null == undefined
true
> null === undefined
false
> var a
undefined
> a
undefined
> null == a
true
> null === a
false
> var victor = new Object()
undefined
> var inno = {}
undefined
> victor === inno
false
> true + 1
2
> 0.1 + 0.2
0.30000000000000004
> 7//2
7
> 7//2
7
> 7/2
3.5
> 7%2
1
> var j = new Object()
undefined
> j
{}
> j.name = 'Precious'
'Precious'
> j
{ name: 'Precious' }
> j.lname = null
null
> j
{ name: 'Precious', lname: null }
> j.name
'Precious'
> j['name']
'Precious'
> j['lname'] = 'Victor'
'Victor'
> j
{ name: 'Precious', lname: 'Victor' }
> Object.keys(j)
[ 'name', 'lname' ]
> Object.values(j)
[ 'Precious', 'Victor' ]
> Object.entries(j).length
2
> Object.entries(inno).length
0
> delete j.lname
true
> delete j.name
true
> j
{}
>