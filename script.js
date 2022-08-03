
        function Movement(movement){
            var url = 'Nabeel.php?data='+movement;
            var xhr = new XMLHttpRequest();
            xhr.open('GET' , url , false);
            xhr.send();
        }
   