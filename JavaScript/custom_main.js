function showCart()
{
    document.getElementById('cart').style.display='block';
    document.getElementById('fbutton').style.display='none';
}

function hideCart()
{
    document.getElementById('cart').style.display='none';
    document.getElementById('fbutton').style.display='block';


}

  
   
      
                 

   var top=-1;
   let i=0;
   const final=[
           {id:1,title:"Vans OldSkool X Bape Camo",price:4999,img:"./draft/bape camo.png"},
           {id:2,title:"Vans OldSkool X Bape Shark",price:5599,img:"./draft/bape shark.png"},
           {id:3,title:"Vans OldSkool Floral",price:2499,img:"./draft/floral.png"},
           {id:4,title:"Vans OldSkool Flame",price:5999,img:"./draft/flame.png"},
           {id:5,title:"Vans OldSkool Peanut Comic",price:3499,img:"./draft/peanuts.png"},
           {id:6,title:"Vans OldSkool Sakura",price:2799,img:"./draft/sakura.png"},
           {id:7,title:"Vans OldSkool ",price:1499,img:""},
           {id:8,title:"Vans OldSkool X Camo",price:1999,img:""}
    
   ];
    
   var s=[];                            //pushh,popp
   var temp=[];                        //pushh1,popp1
   var v=[];                             //pushh2,popp2
   var sid=[];                         //pushh3,popp3
    
   var top1=-1;
   var top2=-1;
   var top3=-1;
   function isempty(){
       if(s[top]==-1)
       return 1;
       else
       return 0;
    
   }
    
   function isfull(){
       if(s[top]==9)
           return 1;
           else 
           return 0;
       
   }
   function pushh(x){
       if(isfull()==1){
           console.log('stack full');
           return;
       }
       top++;
       s[top]=x;
    
   }
   function popp(){
       var t=s[top];
       if(isempty()==1){
           console.log('nothing in stack');
           return;
       }
       
       top--;
       s.pop();
       return t ;
   }
    
   function peek(){
       var t=s[top];
       if( isempty()==1){
           console,log('nothing in stack');
       }
       return t;
    
   }
   
   
   
   function isempty1(){
       if(temp[top1]==-1)
       return 1;
       else
       return 0;
    
   }
   function isfull1(){
       if(temp[top1]==9)
           return 1;
           else 
           return 0;
   }
   function pushh1(x){
       if(isfull1()==1){
           console.log('stack full');
           return;
       }
       top1++;
       temp[top1]=x;
    
   }
   function popp1(){
       var t=temp[top1];
       if(isempty1()==1){
           console.log('nothing in stack');
           return;
       }
       
       top1--;
       temp.pop();
       return t ;
   }
   function peek1(){
       var t=temp[top1];
       if( isempty1()==1){
           console,log('nothing in stack');
       }
       return t;
    
   }
   
   
   
   function isempty2(){
       if(v[top2]==-1)
       return 1;
       else
       return 0;
   }
   function isfull2(){
       if(v[top2]==9)
           return 1;
           else 
           return 0;   
   }
   function pushh2(x){
       if(isfull2()==1){
           console.log('stack full');
           return;
       }
       top2++;
       v[top2]=x;
   }
   function popp2(){
       var t=v[top2];
       if(isempty2()==1){
           console.log('nothing in stack');
           return;
       }
       top2--;
       v.pop();
       return t ;
   }
   function peek2(){
       var t=v[top2];
       if( isempty2()==1){
           console,log('nothing in stack');
       }
       return t;
   }
   
   
   
   
   function isempty3(){
       if(sid[top3]==-1)
       return 1;
       else
       return 0;
   }
   function isfull3(){
       if(sid[top3]==9)
           return 1;
           else 
           return 0;   
   }
   function pushh3(x){
       if(isfull3()==1){
           console.log('stack full');
           return;
       }
       top3++;
       sid[top3]=x;
   }
   function popp3(){
       var t=sid[top3];
       if(isempty3()==1){
           console.log('nothing in stack');
           return;
       }
       
       top3--;
       sid.pop();
       return t ;
   }
   function peek3(){
       var t=temp[top3];
       if( isempty3()==1){
           console,log('nothing in stack');
       }
       return t;
   }
    
   //sorting elements in ascending order
    
   let tem;
   var j=0;
   function ascendingorder(){
   while(s.length!=0){
       tem= s[top];
       tem2=v[top];
      // console.log(temp);
       popp();
       popp2();
       while(temp[top1]>tem){
      //popp1();
       pushh(popp1());
       pushh2(popp3());
      // console.log(s);
       j++;
       }
   pushh1(tem);
   pushh3(tem2);
    
   }
   }
    
   //pushes value of price to array 
   for(var z=0;z<final.length;z++)
   {
       pushh(final[z].price);
       pushh2(final[z].id);
      
   }
    

   
   var final1 = "";
   //working
   //sorting using stack
   function sortAscending(){
       ascendingorder();
       
       for (var counter=0;counter < sid.length;counter++)
       {    
           var cc=sid[counter]-1;
           var str =`
           <div class='box'><h3>${final[cc].title}</h3>
           <img src='${final[cc].img}' alt=''>
           <p>${final[cc].price}</p>
           <div><button class='button btn'>Add To Cart</button></div></div>`;
        //    final1 = final1.concat("<div class='box' id='box1'><h3>${final[sid[counter]+1].title}</h3>");
          //  final1 = final1.concat("<img src='${final[sid[counter]+1].img}' alt=''>");
        //    final1 = final1.concat("<p>${final[sid[counter]+1].price}</p>");
          //  final1 = final1.concat("<div><button class='button btn'>Add To Cart</button></div></div>");
          final1 = final1.concat(str);
       }
        //document.getElementById('grid1').innerHTML = final1;
   }

   function sortDescending(){
    ascendingorder();
    
    for (var counter=sid.length-1;counter >=0;counter--)
    {    
        var cc=sid[counter]-1;
        var str =`
        <div class='box'><h3>${final[cc].title}</h3>
        <img src='${final[cc].img}' alt=''>
        <p>${final[cc].price}</p>
        <div><button class='button btn'>Add To Cart</button></div></div>`;
     //    final1 = final1.concat("<div class='box' id='box1'><h3>${final[sid[counter]+1].title}</h3>");
       //  final1 = final1.concat("<img src='${final[sid[counter]+1].img}' alt=''>");
     //    final1 = final1.concat("<p>${final[sid[counter]+1].price}</p>");
       //  final1 = final1.concat("<div><button class='button btn'>Add To Cart</button></div></div>");
       final1 = final1.concat(str);
    }
     //template 'final1' is not getting pushed using innerHTML  
     document.getElementById('grid1').innerHTML = final1;
}


   
   
   
   
   
   
   
   
   
   
   
   
   
   
