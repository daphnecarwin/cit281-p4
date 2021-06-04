fastify.get("/cit/question", (request, reply) => {
    const {questions} = request.query;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset-utf-8")
      .send(questions);
});

fastify.get("/cit/answer", (request, reply) => {
  const {answers} = request.query;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset-utf-8")
      .send(request.query);
});

fastify.get("/cit/questionanswer", (request, reply) => {
  const {qanda}=request.query;  
  reply
      .code(200)
      .header("Content-Type", "application/json; charset-utf-8")
      .send(qanda);
});


fastify.get("/cit/question/:number", (request, reply) => { 
  const{number} = request.query;
  let response = questions[number];    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset-utf-8")
      .send(response);
});

fastify.get("/cit/answer/:number", (request, reply) => {
  const{number} = request.query;
  let response = answers[number];  
  reply
      .code(200)
      .header("Content-Type", "application/json; charset-utf-8")
      .send(response);
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const{number} = request.query;
  let response = questions[number]+answers[number]; 
    reply
      .code(200)
      .header("Content-Type", "application/json; charset-utf-8")
      .send(response);
});

fastify.get("*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "application/json; charset-utf-8")
      .send("<h1>Route not found<h1>");
});

