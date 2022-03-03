var updated_Image = ["https://s.clipartkey.com/mpngs/s/23-236440_collection-of-indian-grandpa-clipart-transparent-background.png","https://i.pinimg.com/474x/23/dc/68/23dc68d49df14df031c47aae92b0c473.jpg","https://www.kindpng.com/picc/m/591-5911523_transparent-cartoon-guy-png-indian-boy-cartoon-character.png","https://previews.123rf.com/images/zubada/zubada1701/zubada170100004/68376154-young-indian-girl-character-in-national-costume.jpg"];
var updated_Name = ["Ranbir Singh","Diljeet Singh","Rocky Singh","Alia Singh"];
var i=0;
function next(){

    i++;

    var number_of_family_members = 3;
    if (i> number_of_family_members)
    {
        i=0;
}

var image = updated_Image[i];
var name = updated_Name[i];
document.getElementById("family_member_image").src = image;
document.getElementById("family-member_name").innerHTML = name;
}
