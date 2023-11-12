//轮播图
        var a;
        var index = 0;
        
        function dingshiqi(){
             a =setInterval(function(){
            if(index==$(".box-img").length)
            {
                index=0;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
                $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
            }else{
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
                $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
                index++;
            }

        },3000)
        }
        dingshiqi();
        
         

        $(".box-left").click(function(){
           
            if(index<=0){
                clearInterval(a);
                index=$(".box-img").length-1;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
                $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
                dingshiqi();
            }else{
                clearInterval(a);
                index--;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
                $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
                dingshiqi();
            }
            
        })

        
        $(".box-right").click(function(){
           
           if(index>=$(".box-img").length-1){
            clearInterval(a);
               index=0;
               $(".box-img").css("opacity","0");
               $(".box-img").eq(index).css("opacity","1");
               $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
               dingshiqi();
           }else{
            clearInterval(a);
               index++;
               $(".box-img").css("opacity","0");
               $(".box-img").eq(index).css("opacity","1");
               $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
               dingshiqi();
           }
           
       })
    

       $(".but").click(function(){
        clearInterval(a);
            var index = $(this).index();
            
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
                $(".but").css("background-color","#ccc");
                $(".but").eq(index).css("background-color","#fff");
               dingshiqi();

       })
	   // 搜索框
$(".page-nav .search .text").mouseover(function(){

	$(".page-nav .search  .button").toggleClass("text-focus");
})

$(".page-nav .search .text").mouseleave(function(){
	
	$(".page-nav .search  .button").toggleClass("text-focus");
})




$(".page-nav .search .text").focus(function(){
	$(this).toggleClass("text-focus1");
	$(".page-nav .search  .button").toggleClass("text-focus1");
	$(".page-nav .search .hot").css("display","block")
})

$(".page-nav .search .text").focusout(function(){
	$(this).toggleClass("text-focus1");
	$(".page-nav .search  .button").toggleClass("text-focus1");
	$(".page-nav .search .hot").css("display","none");
})


 $(window).scroll(function(){ //滚笼触发事件
			
                if($(window).scrollTop() > 800){
                   //一秒渐入动画
					$(".flexxx").fadeIn(1000);
                }else{
                     $(".flexxx").fadeOut(1000);//一秒渐隐动画
                }
            });
         
		 
		
		 //         $(".page-nav .nav-item ").mouseover( function(){
		 //             $(".page-nav .nav-item .pop").slideDown(200);
		             
		 //         }
		 //         )
		 
		 //         $(".page-nav .nav-item").mouseout( function(){
		 //             $(".page-nav .nav-item .pop").hide();
		             
		 //         }
		 //         )
		 
				// $(".page-top .top-lt .download").mouseover( function(){
					
					
		  //           $(".page-top .top-lt a.download .down-box").slideDown(300);
		             
		  //        }
		  //        );
				
		  //        $(".page-top .top-lt .download").mouseout( function(){
		  //            $(".page-top .top-lt a.download .down-box").slideUp(300);
		             
		  //        }
		  //        );
		  
		  

