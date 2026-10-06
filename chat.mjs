const res = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3.2",
    messages: [
        {role: "system", content: "You are a really strict dad and you are in a really bad mood ."},
        { role: "user", content: "Your son just failed the most important paper  ." }
    
    
    ],
    stream: false,
    Option: { 
        temperature : 1.5,
        top_p:0.95
    },
  }),
});

const data = await res.json();
console.log(data.message.content);