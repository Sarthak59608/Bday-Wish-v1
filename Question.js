class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Date");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.answer=createElement('h3');
    this.yesbutton = createButton("Yes");
    this.wish = createElement('h3');
    this.hmm=createButton("Thank you");
    this.smile= createElement('h2');
    this.nice=createElement('h3');
    this.niceInput =createInput("Write Here Pls");
    this.newbutton= createButton('Next');
    this.abutton=createButton('Next');
    this.bbutton = createButton('Ohk');
    this.joke=createElement('h2');
    this.text=createElement('h3');
    this.text2=createElement('h3');
    this.text4=createElement('h3');
    this.text2button=createButton('Next');
    this.cbutton=createButton('Next');
    this.textinput=createElement('h3');
    this.textinput2=createElement('h3');
    this.textinput3=createElement('h2');
    this.bubutton=createButton(':)');
    this.close=createElement('h3');
    this.close2=createElement('h3');
    this.close3=createElement('h3');
  }

  hide(){
    this.close3.hide();
    this.close.hide();
    this.close2.hide();
    this.bubutton.hide();
    this.textinput.hide();
    this.textinput2.hide();
    this.cbutton.hide();
    this.text4.hide();
    this.text3.hide();
    this.text.hide();
    this.text2.hide();
    this.bbutton.hide();
    this.abutton.hide();
    this.title.hide();
    this.newbutton.hide();
    this.input1.hide();
    this.niceInput.hide();
    this.button.hide();
    this.input2.hide();
    this.answer.hide();
    this.yesbutton.hide();
    this.wish.hide();
    this.hmm.hide();
    this.smile.hide();
    this.textinput3.hide();
    this.nice.hide();
    this.joke.hide();
  }
 
  display(){
    this.close2.hide();
    this.close.hide();
     this.close3.hide();
    this.close.html("You can close this now");
    this.close3.html("thats all i have.");
    this.close2.html("bye");
    this.close3.position(190, 200);
    this.close.position(190, 250);
    this.close2.position(190,300);
    this.bubutton.hide();
    this.textinput.hide();
    this.textinput2.hide();
    this.textinput3.hide();
    this.bubutton.position(190, 200);
    this.textinput.html("I want you to know,");
    this.textinput.position(190, 200);
    this.textinput2.html("you are one of my 5 friends");
    this.textinput2.position(190, 250);
    this.textinput3.html("Whom I call Real ones");
    this.textinput3.position(190, 300);
    this.cbutton.hide();
    this.cbutton.position(190, 250);
    this.text4.hide();
    this.text2button.hide();
    this.text2button.position(190, 250);
   this.text2.hide();
   this.text2.html("as only the name you put in can be seen by me"); this.text2button.hide();

  this.text4.hide();
  this.text4.html("so just tell the gift in private chat");
  this.text4.position(190, 250);
    this.text2.position(190, 200);
    this.text.hide();
    this.text.html("Well This is not a realtime talk");
    this.text.position(190, 200);
    this.bbutton.hide();
    this.joke.hide();
    this.abutton.hide();
    this.niceInput.hide();
    this.newbutton.hide();
    this.newbutton.position(190, 200);
    this.hmm.hide();
    this.nice.hide();
    this.smile.hide();
    this.title.html("Hello");
    this.wish.hide();
    this.wish.html("HAPPY BIRTHDAY!!!!");
    this.wish.position(150, 80);
    this.title.position(350, 0);
    this.answer.html("So isnt it your birthday?");
    this.answer.position(150, 150);
    this.bbutton.position(150, 200);
    this.joke.html("My pocket Money=Your gift(after corona)");
    this.joke.position(150, 150);
    this.question.html("Question:- What Date is it today? " );
    this.question.position(150, 80);
    this.smile.html("=)");
    this.abutton.position(290, 300);
    this.niceInput.position(150,280);
    this.nice.html("What is your dream gift?");
    this.nice.position(150, 80);
    this.smile.position(350, 100);
    this.yesbutton.position(300, 230);
    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.hmm.position(250, 230);
    this.answer.hide();
    this.yesbutton.hide();
    this.button.mousePressed(()=>{
      this.nice.hide();
      this.title.hide();
      this.input1.hide();
      this.niceInput.hide();
      this.newbutton.hide();

      this.input2.hide();
      this.button.hide();
      this.smile.hide();
      this.answer.show();
      this.yesbutton.show();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.yesbutton.mousePressed(()=>{
      this.nice.hide();
      this.title.hide();
      this.question.hide();
      this.newbutton.hide();
      this.input1.hide();
      this.niceInput.hide();
      this.input2.hide();
      this.button.hide();
      this.smile.hide();
      this.answer.hide();
    this.yesbutton.hide();
      this.wish.show();
      this.hmm.show();
    });
    this.hmm.mousePressed(()=>{
      this.nice.hide();
      this.title.hide();
      this.question.hide();
      this.input1.hide();
      this.input2.hide();
      this.niceInput.hide();
      this.button.hide();
      this.answer.hide();
    this.yesbutton.hide();
      this.wish.hide();
      this.hmm.hide();
      this.smile.show();
      this.newbutton.show();
    });
   this.newbutton.mousePressed(()=>{
   this.nice.show();
   this.newbutton.hide();
   this.smile.hide();
   this.niceInput.show();
   this.abutton.show();
   });
   this.abutton.mousePressed(()=>{
    this.nice.hide();
    this.newbutton.hide();
    this.smile.hide();
    this.niceInput.hide();
    this.abutton.hide();
    this.joke.show();
    this.bbutton.show();
    });
    this.bbutton.mousePressed(()=>{
      this.nice.hide();
      this.newbutton.hide();
      this.smile.hide();
      this.niceInput.hide();
      this.abutton.hide();
      this.joke.hide();
      this.bbutton.hide(); 
      this.text.show();
      this.text2button.show();
      });
      this.text2button.mousePressed(()=>{
        this.nice.hide();
        this.newbutton.hide();
        this.smile.hide();
        this.niceInput.hide();
        this.abutton.hide();
        this.joke.hide();
        this.bbutton.hide(); 
        this.text.hide();
        this.text2button.hide();
        this.text4.show();
        this.text2.show();
        this.cbutton.show();
        }); this.cbutton.mousePressed(()=>{
          this.nice.hide();
          this.newbutton.hide();
          this.smile.hide();
          this.niceInput.hide();
          this.abutton.hide();
          this.joke.hide();
          this.bbutton.hide(); 
          this.text.hide();
          this.text2button.hide();
          this.text4.hide();
          this.text2.hide();
          this.cbutton.hide();
          this.textinput2.show();
          this.textinput3.show();
          this.textinput.show();
          this.bubutton.show();
          });
          this.bubutton.mousePressed(()=>{
            this.nice.hide();
            this.newbutton.hide();
            this.smile.hide();
            this.niceInput.hide();
            this.abutton.hide();
            this.joke.hide();
            this.bbutton.hide(); 
            this.text.hide();
            this.text2button.hide();
            this.text4.hide();
            this.text2.hide();
            this.cbutton.hide();
            this.textinput2.hide();
            this.textinput3.hide();
            this.textinput.hide();
            this.bubutton.hide();
           this.close.show();
           this.close2.show();
           this.close3.show();
            });
  }
}
