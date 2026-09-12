const navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close");
if(navToggle)navToggle.addEventListener("click",()=>navMenu.classList.add("show-menu"));
if(navClose)navClose.addEventListener("click",()=>navMenu.classList.remove("show-menu"));
document.querySelectorAll(".nav__link,.nav__contact").forEach(link=>link.addEventListener("click",()=>navMenu.classList.remove("show-menu")));

const typedElement=document.getElementById("home-typed");
if(typedElement && window.Typed){new Typed("#home-typed",{strings:["Python","Java","C++","AI / ML","Problem Solving"],typeSpeed:80,backSpeed:45,backDelay:1400,loop:true});}

const header=document.getElementById("header"),scrollUp=document.getElementById("scroll-up");
function onScroll(){
  if(window.scrollY>=60)header.classList.add("scrolled");else header.classList.remove("scrolled");
  if(window.scrollY>=500)scrollUp.classList.add("show-scroll");else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll",onScroll);
scrollUp.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const sections=document.querySelectorAll("section[id]");
function updateActive(){
  const y=window.scrollY;
  sections.forEach(section=>{
    const top=section.offsetTop-130,bottom=top+section.offsetHeight,id=section.id;
    const link=document.querySelector('.nav__link[href="#'+id+'"]');
    if(link)link.classList.toggle("active-link",y>=top&&y<bottom);
  });
}
window.addEventListener("scroll",updateActive);

const form=document.getElementById("contact-form"),message=document.getElementById("form-message");
form.addEventListener("submit",e=>{
  e.preventDefault();

  const name=document.getElementById("user_name").value.trim();
  const email=document.getElementById("user_email").value.trim();
  const msg=document.getElementById("user_message").value.trim();

  if(!name || !email || !msg){
    message.textContent="Please fill in all fields.";
    return;
  }

  const subject=encodeURIComponent("Portfolio Contact from " + name);
  const body=encodeURIComponent(
    "Hello Nandhana,\n\n" +
    "You received a message through your portfolio website.\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + msg + "\n\n" +
    "Sent from your portfolio website."
  );

  // Opens Gmail compose with Nandhana's email already filled in.
  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=nandhanavinodvadakkan08@gmail.com" +
    "&su=" + subject + "&body=" + body;

  window.open(gmailUrl,"_blank");
  message.textContent="Gmail is opening with your message ready to send.";
  form.reset();
});
onScroll();updateActive();
