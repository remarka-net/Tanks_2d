
gameplay_info = {
    "tank_angle": 0
    
};

game_start = {
    "tank": {

        "color": {
            "r": 255,
            "g": 0,
            "b": 0
        },
        
        //"COMMENT": "also red and blue",
    
        "dimensions": {
            "h": 200,
            "w": 100
        }
    },
    "canvas": {
        "h": 800,
        "w": 800
    }
};

local_info = {  
    "gun": {
        "dimensions": {
            "h": 50,
            "w": 10
        },
        "color": {
            "r": game_start.tank.color.r/2,
            "g": game_start.tank.color.g/2,
            "b": game_start.tank.color.g/2
        }
    }
};

jQuery("#Canvas").attr("width", game_start.canvas.w).attr("height", game_start.canvas.h);
var ctx = jQuery("#Canvas")[0].getContext("2d");
//tank
ctx.fillStyle = `rgb(${game_start.tank.color.r},${game_start.tank.color.g},${game_start.tank.color.b})`;
ctx.translate(game_start.tank.dimensions.w/2, game_start.tank.dimensions.h/2);
ctx.rotate((Math.PI / 180) * 25);// 
ctx.fillRect(game_start.canvas.w/2 - game_start.tank.dimensions.w/2, game_start.canvas.h/2 - game_start.tank.dimensions.h/2, game_start.tank.dimensions.w, game_start.tank.dimensions.h);
//gun
ctx.fillStyle = `rgb(${local_info.gun.color.r},${local_info.gun.color.g},${local_info.gun.color.b})`;
ctx.fillRect(400, 400, local_info.gun.dimensions.w, local_info.gun.dimensions.h);








