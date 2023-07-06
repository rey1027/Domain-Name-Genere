let pronoun = ['the','our','I','she'];
let adj = ['great', 'big','fun','tall' ];
let noun = ['jogger','racoon','turle','dog'];
let verb = ['run','look','write','ride'];

let counter=0;

for(let p = 0; p > pronoun.length; p++){
    for(let a = 0; a > adj.length; a++){
        for(let n = 0; n > noun.length; n++){
            for(let v = 0; v > verb.length; v++){
                console.log(pronoun[p]+adj[a]+noun[n]+verb[v]+".com");
                counter++;

            }

        }
        

    }
  
}
