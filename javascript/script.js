////////////////////Variables//////////////////////////////////////
const $=document
const userContainer=_id('user-container')
const btnContainer=_id('btn-container')
let newLiElement,newBtnElement,currentBtn,allPaginationBtn;
let users_row=5;
let current_page=1;
const usersArray=[
    {id:1,firstname:'Hooman',familyname:'Mousavi'},
    {id:2,firstname:'Reza',familyname:'Mohammadi'},
    {id:3,firstname:'Ali',familyname:'Mirzaee'},
    {id:4,firstname:'Ahmad',familyname:'Ghorbani'},
    {id:5,firstname:'Mitra',familyname:'Saadat'},

    {id:6,firstname:'Sahar',familyname:'Ahmadi'},
    {id:7,firstname:'Arash',familyname:'Keshtkar'},
    {id:8,firstname:'Gholam',familyname:'Ghafari'},
    {id:9,firstname:'Benyamin',familyname:'Alizadeh'},
    {id:10,firstname:'Sina',familyname:'Sharifi'},

    {id:11,firstname:'Abdolreza',familyname:'Khavari'},
    {id:12,firstname:'Sajad',familyname:'Shahriary'},
    {id:13,firstname:'Alireza',familyname:'Alikhani'},
    {id:14,firstname:'Reza',familyname:'RezaZadeh'},
    {id:15,firstname:'Nazanin',familyname:'Ahmadi'},

    {id:16,firstname:'Yalda',familyname:'Rezaee'},
    {id:17,firstname:'Maryam',familyname:'Ghanee'},
    {id:18,firstname:'Mehdi',familyname:'Mousavi'},
    {id:19,firstname:'Arian',familyname:'Mousavi'},
    {id:20,firstname:'Melika',familyname:'Arjmand'},

    {id:21,firstname:'Morteza',familyname:'Saberi'},
    {id:22,firstname:'Amir',familyname:'Alikhani'},

]
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
//////////////////////////////////////////////////////////
function setPaginationOnLoad() {
    userContainer.innerHTML=''
    liGenerator(users_row*current_page,users_row)
    btnGenerator(current_page,users_row)
}
function changePagination(e) {
    currentBtn=e.target.dataset.val
    allPaginationBtn=_qAll('.pagination-btn')
    allPaginationBtn.forEach(function (btn) {
        btn.classList.remove('active')
    })
    e.target.classList.add('active')
    userContainer.innerHTML=''
    liGenerator(users_row*currentBtn,users_row)
}
function liGenerator(endIndex,amount) {
    for(let i=0;i<amount;i++){
        newLiElement=$.createElement('li')
        newLiElement.className='list-group-item p-3'
        newLiElement.innerHTML=`${usersArray[endIndex-users_row].firstname} ${usersArray[endIndex-users_row].familyname}`
        userContainer.append(newLiElement)
        endIndex++
    }
}
function btnGenerator(currentPage,amount) {
    for(let i=0;i<Math.ceil(usersArray.length / amount);i++){
        newBtnElement=$.createElement('span')
        newBtnElement.className='pagination-btn'
        newBtnElement.innerHTML=`${i+1}`
        newBtnElement.setAttribute('onclick','changePagination(event)')
        newBtnElement.setAttribute('data-val',`${i+1}`)
        if(i+1===currentPage){
            newBtnElement.classList.add('active')
        }
        btnContainer.append(newBtnElement)
    }
}
window.addEventListener('load',setPaginationOnLoad)