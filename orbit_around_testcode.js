var r = content("Group 1").transform.rotation; //Group Rotation
var y = content("Group 1").content("Path 1").path.pointOnPath(1, time)[1]; // Group.path Y Coordnate 

var YY;
var XX;

var differ;

if (r <= 180 || r == 360) {
    YY = linear(r % 360, 0, 180, y, -y)
    XX = linear(Math.abs(YY), 0, -y, -y, 0);


} else {
    YY = linear(r % 360, 180, 360, -y, y)
    XX = linear(Math.abs(YY), -y, 0, y, 0);
};

var differ = (Math.abs(XX)*Math.abs(YY))/Math.abs(y);
XX = XX > differ ? XX + differ :  XX - differ ;
YY = YY > differ ? YY + differ :  YY - differ ;

[XX, YY]

