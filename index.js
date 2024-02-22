const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
// require ((«dotenv»).).config()
const port = 3000

const users = [
    { 
        name: "samakila", 
        password: "1234"
    }
]

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEApVig3FqcoVFQ1/KMUie6BceR2v78Lt9A+rBKrvww31rL5R0q
TJrtHbD9ITd8FpHIOv91KfTSWNfbfmVRhGdtAIa0ZBuzelLiKafnT1knSPwAX+0t
Qb2HKbGThHhg+2u1tSds8MDCjYZO2SIVUlV4mbJX9jz+pqjNW89IKMEcHu3V+a2B
y03cWb8UU/rHq9z3GuJk4J161KiwJyVYKRBwQlgdn63lwchiBIoKq4003bwSgLwI
2vGIObk5y9klw044UTQfjCw/oYNMsKu/t5CSp8r7xVh4pFTE+QvlYa0SQ0XPX6Rt
s6dHYbokO9mgqPqrH7+NLj24h/cQpaOs/WJ1sQIDAQABAoIBADe6Dz01LOURyvV9
Qd3Oldusz3PHzKbfh771+7XOOYqNx3qIweDftlrzc9zmHmRc7ec0ggCKCvr2hXus
GjVNxmcO/21eCLeJh8ASXttXaO4oQNgTz9UAU7Wxq85R5B3Yx30utIDP9sJMKfb0
jcsaE3N5sDvFgu4Ypl3zFpblvtyNMPfmRYyd4dIPAYwkxoPGbmGU6BK8Hk1kNHzQ
mue4bvFGGusEAj7K24e+4XboF2B+naHINSPhd0JCi4Ns1Vxcb/9eDWecQfRtLlSb
ZjRXOvPYGXYwZtdnR0EiEMo8Qni6Qhk8lwEtZYEpZFuaiEOLgiaXYefZhyD3E5Lj
4XJPOiECgYEA4UTyyGTLeppeGKubf1u0qCKg66ag0mdwAADzfgMPaQogf+KUyHdP
Kf4lQFtGm6hdGWMmfzo9UEO6qdIsHzfKaz/0LHI1XNfDkInl7wex9U5gfkzx7oKX
i9eTlge2zowarmbb+dN4AciromJ9Q+vPzi3cDkz0kFsxNWvgqnhwJqcCgYEAu+b+
EYsvyVEITQeFuwBcZGNPLUr/tKXv4Y6hlUDyZNjXsfBKwFpcuhS8xH9zxeSK2fT/
b7Yjcj0W+TxuJvuva/IGl+RaWzk1XV7w5bzJk0zFS1QgG1Vn77ET9vB7E+gpnM4l
ois8o4o7+AJbHLER8rWyEfFhFy2gzva7Q4l7Y+cCgYEA0DeKsO95pLlKgEMeV3nM
Yhyf4TEDNXemblpytebeN5jEsXAdVa3x3j6q7/FuMjJM20pqKu8J/UadIprBbZmD
394dM3fdGxPUD6Vmgqn6M2NejV9Rv8O1j+yS3foDXqbhgpJQgXqVUhDJlC602jL8
wPZikFVROJ0Rvu8Xmnn4L8ECgYBr69MXLnMm1HTJET381ss6GVPbds0A66GoUix6
NhBCXc0c9R9p9Tx23/w/e9h527boUm/3sIwRTAcK5Wt61mm9vQeOa+h9ppEA7Mu9
l73K7XgPuOSr7lTA9Vq7JQn7uAdWeYxh5SVx5K5m1quQAh+F4FfDOHkEP/+xf0K1
GpyVFwKBgQDfMZtevIChFNsslYl0WA0u1yi2vh4Xc9/uz/p11BBIFOwJDPsIGoR7
sdrmw6X5hcdXc6lT3fqMov/8uRllDbDyki4JwcCpLg4GhsFXegaqKHuR8zeEhalg
PnaQnGpXQ30gsBKb8GyeL+9ebwN1c9osOx8S2j29pDPoisiMOjCV1g==
-----END RSA PRIVATE KEY-----`

const publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApVig3FqcoVFQ1/KMUie6
BceR2v78Lt9A+rBKrvww31rL5R0qTJrtHbD9ITd8FpHIOv91KfTSWNfbfmVRhGdt
AIa0ZBuzelLiKafnT1knSPwAX+0tQb2HKbGThHhg+2u1tSds8MDCjYZO2SIVUlV4
mbJX9jz+pqjNW89IKMEcHu3V+a2By03cWb8UU/rHq9z3GuJk4J161KiwJyVYKRBw
Qlgdn63lwchiBIoKq4003bwSgLwI2vGIObk5y9klw044UTQfjCw/oYNMsKu/t5CS
p8r7xVh4pFTE+QvlYa0SQ0XPX6Rts6dHYbokO9mgqPqrH7+NLj24h/cQpaOs/WJ1
sQIDAQAB
-----END PUBLIC KEY-----`
app.use(express.json())

app.get('/', (req, res) => {

    const idToken = req.headers.authorization;
    jwt.verify(idToken, publickey, (err, decode) => {
        if(err) {
            res.status(401).send("Token invalide")
        } else {
            res.send(users)
        }
    } )

    console.log(idToken);
    res.send(users);

})

app.post('/auth', (req, res) => {
    const  { name, password } = req.body

    const valid = users.some(user => user.name === name && user.password === password)
    
    const token = jwt.sign({name}, privateKey, {algorithm: 'RS256'})
    
    if(valid) {
        res.send(token)
    } else {
        res.status(404).send("Pas trouvé")
    }
    
})

app.listen(port, () => {
  console.log(`Le serveur est opérationnel sur le port ${port}`)
})