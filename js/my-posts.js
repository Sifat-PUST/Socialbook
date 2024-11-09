const photo_video=document.getElementById('photo-video')
const mask_display=document.getElementById('upload-popup')
const discard_btn=document.getElementById('discard-post')

photo_video.onclick=function(){
    mask_display.style.display='flex';
    // document.body.classList.add('no-scroll');
    //ater jonno jekono css file a .no-scroll
    // element age thake toiri kora rakha lagbe
    document.body.style.overflow='hidden'
}
discard_btn.onclick=()=>{
    mask_display.style.display='none';
    document.body.style.overflow='scroll'
}

mask_display.onclick=function(event){
    if(event.target===mask_display){
        mask_display.style.display='none';
        document.body.style.overflow='scroll'
        // document.body.classList.remove('no-scroll');
    }
}



//For Post Button click

// const post_btn=document.getElementById('post-submit')
const post_btns=document.querySelectorAll('.post-btn')
const caption1=document.getElementById('caption')
const caption2=document.getElementById('caption2')
const file=document.getElementById('uploadfile')


post_btns.forEach(post_btn=>{
    post_btn.onclick=function(event){
        event.stopPropagation();
        let caption=caption2.value;
        // const video_img=file.files[0];
        let video_img=null;
        if(file.files.length===0 && (caption1.value===''&&caption2.value==='')){
            alert('File is not uploaded')
            return;
        }
        else{
            if(file.files.length===0 && caption2.value===''){
                caption=caption1.value;
            }
            else if(file.files.length===0 && caption1.value===''){
                caption=caption2.value;
            }
            else if(caption1.value==='' && caption2.value===''){
                video_img=file.files[0];
            }
            else if(caption1.value===''){
                caption=caption2.value;
                video_img=file.files[0];
            }
            
            //section main-post
            const main_post=document.createElement('section')
            main_post.classList.add('main-post')

            const post_header=document.createElement('div')
            post_header.classList.add('post-header')
            const post_container=document.createElement('div')
            post_container.classList.add('post-container')
            const post_footer=document.createElement('div')
            post_footer.classList.add('post-footer')

            //post-header div (1)
            const profile_img=document.createElement('div')
            profile_img.classList.add('profile-img')
            const post_header_right=document.createElement('div')
            post_header_right.classList.add('post-header-right')

            //(1>)
            const profile_pic=document.createElement('img')
            profile_pic.classList.add('profile-pic')
            profile_pic.src='../images/sifat-2.jpg'
            const post_info=document.createElement('div')
            post_info.classList.add('post-info')
                const post_man_name=document.createElement('h5')
                post_man_name.classList.add('post-man-name')
                post_man_name.innerHTML='Md. Sifat'
                const post_time=document.createElement('p')
                post_time.classList.add('post-time')
                // const date=new Date();
                // post_time.innerHTML=`${date.getHours()}:${date.getMinutes()}
                //                         ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
                    const date = new Date();
                    let hours = date.getHours();
                    let minutes = String(date.getMinutes()).padStart(2, '0');
                    let amPm = hours >= 12 ? 'PM':'AM';
                    hours = hours % 12||12; 
                    post_time.innerHTML=`${hours}:${minutes}${amPm}\n
                                        ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

                // post_time.innerHTML='date & time'
            const post_option=document.createElement('p')
            post_option.classList.add('post-option')
            post_option.innerHTML='⁝';
            const post_close=document.createElement('p')
            post_close.classList.add('post-close')
            post_close.innerHTML='×'

            //embade post header section
            post_header_right.appendChild(post_option)
            post_header_right.appendChild(post_close)

            post_info.appendChild(post_man_name)
            post_info.appendChild(post_time)

            profile_img.appendChild(profile_pic)
            profile_img.appendChild(post_info)

            post_header.appendChild(profile_img)
            post_header.appendChild(post_header_right)
            //close post header

            //post container (2)
            const post_caption=document.createElement('p')
            post_caption.classList.add('post-caption')
            post_caption.innerHTML=caption;
            
            post_container.appendChild(post_caption)
            if(video_img!==null){
                const media_element = video_img.type.startsWith('video') ? document.createElement('video') : document.createElement('img');
                media_element.src=URL.createObjectURL(video_img)
                media_element.controls=video_img.type.startsWith('video')
                post_container.appendChild(media_element)
            }

            //embade post container
            // post_container.appendChild(media_element)
            //close post container

            //post footer (3)
            const post_action1=document.createElement('div')
            post_action1.classList.add('post-action')
            const post_action2=document.createElement('div')
            post_action2.classList.add('post-action')
            const post_action3=document.createElement('div')
            post_action3.classList.add('post-action')

            const reaction_img1=document.createElement('img')
            reaction_img1.src='../images/like.png'
            const reaction_name1=document.createElement('p')
            reaction_name1.innerHTML='Like'

            const reaction_img2=document.createElement('img')
            reaction_img2.src='../images/comments.png'
            const reaction_name2=document.createElement('p')
            reaction_name2.innerHTML='Comment'
            
            const reaction_img3=document.createElement('img')
            reaction_img3.src='../images/share.png'
            const reaction_name3=document.createElement('p')
            reaction_name3.innerHTML='Share'

            //embade fotter
            post_action1.appendChild(reaction_img1)
            post_action1.appendChild(reaction_name1)

            post_action2.appendChild(reaction_img2)
            post_action2.appendChild(reaction_name2)

            post_action3.appendChild(reaction_img3)
            post_action3.appendChild(reaction_name3)

            post_footer.appendChild(post_action1)
            post_footer.appendChild(post_action2)
            post_footer.appendChild(post_action3)
            post_footer.classList.add('post-footer')


            main_post.appendChild(post_header)
            main_post.appendChild(post_container)
            main_post.appendChild(post_footer)
            // post is created now add to main

            //append creted post in main container
            const main_container=document.getElementById('main-container')
            main_container.appendChild(main_post)

            caption1.value='';
            caption2.value='';
            file.value=''
            mask_display.style.display='none';
            document.body.style.overflow='scroll'
            
        }

    }
})


















// const photo_video=document.getElementById('photo-video')
// const mask_display=document.getElementById('upload-popup')
// const discard_btn=document.getElementById('discard-post')

// photo_video.onclick=function(){
//     mask_display.style.display='flex';
//     // document.body.classList.add('no-scroll');
//     //ater jonno jekono css file a .no-scroll
//     // element age thake toiri kora rakha lagbe
//     document.body.style.overflow='hidden'
// }
// discard_btn.onclick=()=>{
//     mask_display.style.display='none';
//     document.body.style.overflow='scroll'
// }

// mask_display.onclick=function(event){
//     if(event.target===mask_display){
//         mask_display.style.display='none';
//         document.body.style.overflow='scroll'
//         // document.body.classList.remove('no-scroll');
//     }
// }



// //For Post Button click

// // const post_btn=document.getElementById('post-submit')
// const post_btns=document.querySelectorAll('.post-btn')
// const caption1=document.getElementById('caption')
// const caption2=document.getElementById('caption2')
// const file=document.getElementById('uploadfile')

// const caption='';

// post_btns.forEach(post_btn=>{
//     post_btn.onclick=function(event){
//         event.stopPropagation();
//         if(file.files.length===0 && (caption1.value===''&&caption2.value==='')){
//             alert('File is not uploaded')
//             return;
//         }
//         else{
//             if(file.files.length===0 && caption1.value===''){
//                 caption=caption2.value;
//             }
//             else if(file.files.length===0 && caption2.value===''){
//                 caption=caption1.value;
//             }
//             else if(caption1.value==='' && caption2.value===''){
//                 const video_img=file.files[0];
//             }
//             else if(caption1.value===''){
//                 caption=caption2.value;
//                 const video_img=file.files[0];
//             }
            
            
//         }

//     }
// })














//importent context


//  //section main-post
//  const main_post=document.createElement('section')
//  main_post.classList.add('main-post')

//  const post_header=document.createElement('div')
//  post_header.classList.add('post-header')
//  const post_container=document.createElement('div')
//  post_container.classList.add('post-container')
//  const post_footer=document.createElement('div')
//  post_footer.classList.add('post-footer')

//  //post-header div (1)
//  const profile_img=document.createElement('div')
//  profile_img.classList.add('profile-img')
//  const post_header_right=document.createElement('div')
//  post_header_right.classList.add('post-header-right')

//  //(1>)
//  const profile_pic=document.createElement('img')
//  profile_pic.classList.add('profile-pic')
//  profile_pic.src='../images/sifat-2.jpg'
//  const post_info=document.createElement('div')
//  post_info.classList.add('post-info')
//      const post_man_name=document.createElement('h5')
//      post_man_name.classList.add('post-man-name')
//      post_man_name.innerHTML='Md. Sifat'
//      const post_time=document.createElement('p')
//      post_time.classList.add('post-time')
//      // post_time.innerHTML=new Date().getUTCDate()
//      post_time.innerHTML='date & time'
//  const post_option=document.createElement('p')
//  post_option.classList.add('post-option')
//  post_option.innerHTML='⁝';
//  const post_close=document.createElement('p')
//  post_close.classList.add('post-close')
//  post_close.innerHTML='×'

//  //embade post header section
//  post_header_right.appendChild(post_option)
//  post_header_right.appendChild(post_close)

//  post_info.appendChild(post_man_name)
//  post_info.appendChild(post_time)

//  profile_img.appendChild(profile_pic)
//  profile_img.appendChild(post_info)

//  post_header.appendChild(profile_img)
//  post_header.appendChild(post_header_right)
//  //close post header

//  //post container (2)
//  const post_caption=document.createElement('p')
//  post_caption.classList.add('post-caption')
//  post_caption.innerHTML=caption;
//  const media_element = video_img.type.startsWith('video') ? document.createElement('video') : document.createElement('img');
//  media_element.src=URL.createObjectURL(video_img)
//  media_element.controls=video_img.type.startsWith('video')

//  //embade post container
//  post_container.appendChild(post_caption)
//  post_container.appendChild(media_element)
//  //close post container

//  //post footer (3)
//  const post_action1=document.createElement('div')
//  post_action1.classList.add('post-action')
//  const post_action2=document.createElement('div')
//  post_action2.classList.add('post-action')
//  const post_action3=document.createElement('div')
//  post_action3.classList.add('post-action')

//  const reaction_img1=document.createElement('img')
//  reaction_img1.src='../images/like.png'
//  const reaction_name1=document.createElement('p')
//  reaction_name1.innerHTML='Like'

//  const reaction_img2=document.createElement('img')
//  reaction_img2.src='../images/comments.png'
//  const reaction_name2=document.createElement('p')
//  reaction_name2.innerHTML='Comment'
 
//  const reaction_img3=document.createElement('img')
//  reaction_img3.src='../images/share.png'
//  const reaction_name3=document.createElement('p')
//  reaction_name3.innerHTML='Share'

//  //embade fotter
//  post_action1.appendChild(reaction_img1)
//  post_action1.appendChild(reaction_name1)

//  post_action2.appendChild(reaction_img2)
//  post_action2.appendChild(reaction_name2)

//  post_action3.appendChild(reaction_img3)
//  post_action3.appendChild(reaction_name3)

//  post_footer.appendChild(post_action1)
//  post_footer.appendChild(post_action2)
//  post_footer.appendChild(post_action3)
//  post_footer.classList.add('post-footer')


//  main_post.appendChild(post_header)
//  main_post.appendChild(post_container)
//  main_post.appendChild(post_footer)
//  // post is created now add to main

//  //append creted post in main container
//  const main_container=document.getElementById('main-container')
//  main_container.appendChild(main_post)


//  mask_display.style.display='none';
//  document.body.style.overflow='scroll'