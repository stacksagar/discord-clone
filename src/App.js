import React from 'react';

const App = () => {

  const [lsToggle, setLsToggle] = React.useState([true, false, false, true])   

  return (
    <section className="h-screen flex overflow-hidden">

      <div className="left-logos flex flex-col justify-start items-center py-3">
        <div>
          <svg className="homeIcon-tEMBK1" aria-hidden="false" width="28" height="20" viewBox="0 0 28 20"><path fill="currentColor" d="M20.6644 20C20.6644 20 19.8014 18.9762 19.0822 18.0714C22.2226 17.1905 23.4212 15.2381 23.4212 15.2381C22.4384 15.881 21.5034 16.3334 20.6644 16.6429C19.4658 17.1429 18.3151 17.4762 17.1884 17.6667C14.887 18.0953 12.7774 17.9762 10.9795 17.6429C9.61301 17.381 8.43836 17 7.45548 16.6191C6.90411 16.4048 6.30479 16.1429 5.70548 15.8096C5.63356 15.7619 5.56164 15.7381 5.48973 15.6905C5.44178 15.6667 5.41781 15.6429 5.39384 15.6191C4.96233 15.381 4.7226 15.2143 4.7226 15.2143C4.7226 15.2143 5.87329 17.1191 8.91781 18.0238C8.19863 18.9286 7.31164 20 7.31164 20C2.0137 19.8333 0 16.381 0 16.381C0 8.7144 3.45205 2.50017 3.45205 2.50017C6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861L10.4281 0.285909C6.11301 1.52399 4.12329 3.40493 4.12329 3.40493C4.12329 3.40493 4.65068 3.11921 5.53767 2.71446C8.10274 1.59542 10.1404 1.2859 10.9795 1.21447C11.1233 1.19066 11.2432 1.16685 11.387 1.16685C12.8493 0.976379 14.5034 0.92876 16.2295 1.11923C18.5068 1.38114 20.9521 2.0478 23.4452 3.40493C23.4452 3.40493 21.5514 1.61923 17.476 0.381146L17.8116 0.000197861C17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017C24.5479 2.50017 28 8.7144 28 16.381C28 16.381 25.9623 19.8333 20.6644 20ZM9.51712 8.88106C8.15068 8.88106 7.07192 10.0715 7.07192 11.5239C7.07192 12.9763 8.17466 14.1667 9.51712 14.1667C10.8836 14.1667 11.9623 12.9763 11.9623 11.5239C11.9863 10.0715 10.8836 8.88106 9.51712 8.88106ZM18.2671 8.88106C16.9007 8.88106 15.8219 10.0715 15.8219 11.5239C15.8219 12.9763 16.9247 14.1667 18.2671 14.1667C19.6336 14.1667 20.7123 12.9763 20.7123 11.5239C20.7123 10.0715 19.6336 8.88106 18.2671 8.88106Z"></path>
          </svg>
        </div>        

        {
          new Array(3).fill().map((_, index) => (
            <div key={index}>
              <img src={`https://robohash.org/${index+1}`} alt=""/>
            </div>
          ))
        }

        <div className="active">
          <img src={`https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg`} alt="" /> 
        </div>

        {
          new Array(2).fill().map((_, index) => (
            <div key={index}>
              <img src={`https://randomuser.me/api/portraits/women/${index+13}.jpg`} alt=""/>
            </div>
          ))
        }

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>

      </div>     

      <div className="w-sm-screen bg-gray-500 flex flex-col justify-between">
        
        <div style={{ background: '#2f3136' }} className="d-header flex items-center justify-start w-full cursor-pointer">
          <img id="verified" className="w-5 ml-6 mr-1" src="https://img.icons8.com/fluent/48/000000/verified-account.png" alt="verified" title="verified" />
          <span style={{ fontWeight: '500' }} className="tracking-wide">Tailwind CSS</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" className="w-4 h-4 ml-auto mr-3" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div className="left-sidebar w-full text-sm px-3">

          <p className="user-add flex mt-4 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 20 20" fill="#777777">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            welcome  
          </p>
          
          <p className="user-add flex mt-2 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 20 20" fill="#777777">
            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
          </svg>
            announcements
          </p>

          <p onClick={()=> setLsToggle(prev=>[!prev[0], prev[1], prev[2], prev[3]])} className={`${lsToggle[0] && 'active'} category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}>
            TAILWIND CSS
          </p>
          {lsToggle[0] && (
            <div>
              <p className="cursor-pointer user-add user-add-hash user-active">general</p> 
              <p className="cursor-pointer user-add user-add-hash">plugins</p> 
              <p className="cursor-pointer user-add user-add-hash">help</p> 
              <p className="cursor-pointer user-add user-add-hash">internals</p> 
            </div>
          )}

          <p onClick={()=> setLsToggle(prev=>[prev[0], !prev[1], prev[2], prev[3]])} className={`${lsToggle[1] && 'active'} category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}>
            TAILWIND LABS
          </p>

          
          {lsToggle[1] && (             
           <div>
            <p className="cursor-pointer user-add user-add-hash">heroicons</p>  
           </div>
            )}

          <p onClick={()=> setLsToggle(prev=>[prev[0], prev[1], !prev[2], prev[3]])} className={`${lsToggle[2] && 'active'} category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}>
            OFF TOPIC
          </p>
          
          {lsToggle[2] && ( 
          <div>
            <p className="cursor-pointer user-add user-add-hash">random</p>  
          </div>            
          )}

          <p onClick={()=> setLsToggle(prev=>[prev[0], prev[1], prev[2], !prev[3]])} className={`${lsToggle[3] && 'active'} category-toggle mt-5 mb-2 flex items-center justify-start cursor-pointer text-gray-400 ml-4`}>
            COMMUNITY
          </p>          
          {lsToggle[3] && ( 
          <div>
            <p className="cursor-pointer user-add user-add-hash">jobs</p>  
            <p className="cursor-pointer user-add user-add-hash">showcase</p>  
            <p className="cursor-pointer user-add user-add-hash">bot</p>  
          </div>            
          )}
          

        </div>

        <div style={{ background: '#292b2f' }} className="d-header flex justify-between items-center bg-gray-200 w-full">
         <div className="flex items-center cursor-pointer">
          <img className="ml-2 w-8 rounded-full ring" src="https://cdn.discordapp.com/avatars/782977589362425907/bf1b26c992f595014a6fe06e1c3919d8.png?size=256" alt="avatar"/>
            <div className="flex flex-col items-start ml-2"> 
              <span className="text-sm">stacksagar</span>
              <span className="text-gray-500 text-xs">#1841</span>
            </div>
          </div>

          <div className="flex">
            <svg className="mx-1 p-1 cursor-pointer hover:bg-gray-700 rounded" aria-hidden="false" width="25" height="25" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z" fill="currentColor"></path></svg>

            <svg className="mx-1 p-1 cursor-pointer hover:bg-gray-700 rounded" aria-hidden="false" width="25" height="25" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>

            <svg className="mx-1 p-1 cursor-pointer hover:bg-gray-700 rounded" aria-hidden="false" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>          
          </div>
          
        </div>
         
      </div>

      <div className="bg-gray-800 w-full">

        <div style={{background:'#36393f'}} className="d-header flex-center w-full">Header</div>

        <section className="messages-section w-full flex justify-between">
          <div className="flex w-full flex-col justify-between"> 
            
            <div className="messages-main w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, possimus quisquam! Animi, eos itaque dolore, nihil nam soluta, dicta iste omnis rerum quos illum distinctio quam corporis fugit! Nisi, iste odit error animi laudantium facilis facere modi molestias distinctio quis veniam quos harum. Tempore, praesentium? Dolores harum autem perspiciatis atque cupiditate laborum nisi doloremque totam repellat, neque praesentium, quae inventore? Consequatur, quidem beatae eveniet non facere provident fugit excepturi repudiandae maxime modi molestiae maiores magnam repellat hic saepe a libero temporibus. Hic, saepe at. Ex, sequi quod blanditiis qui officia numquam! Explicabo necessitatibus nisi sit a enim ducimus, quod ut reprehenderit quas libero! Sint error voluptatem reiciendis esse! Accusamus architecto quo laborum fuga nulla! Maxime necessitatibus impedit alias error, magni ad est in voluptas, dolore laboriosam deleniti obcaecati qui nemo! Dolorem officia animi ad modi quis adipisci facilis quae repellat voluptatibus repudiandae beatae aspernatur, doloremque magni nam maxime? Aut sit sequi non voluptatem quidem, accusantium pariatur magni amet voluptate, explicabo ut quam dolore porro, perspiciatis iure molestias cum vero nam recusandae ipsam rem molestiae! Ad, molestias dolore ipsa culpa voluptate illo aut eligendi voluptates expedita doloremque? Itaque dolor a quisquam exercitationem. Dignissimos aliquam quae sint illo, ut vel officia itaque in aliquid velit assumenda inventore? Earum animi facere ratione sapiente delectus recusandae numquam harum, temporibus a consectetur sequi in unde vitae repudiandae exercitationem nostrum eligendi quas mollitia ipsa, hic commodi rerum. Impedit, facilis vel ipsum dolor aut, debitis quas culpa accusamus sint tenetur laudantium. Incidunt, sequi? Dignissimos explicabo sed eius ipsa, quas, dolorem animi asperiores exercitationem iusto pariatur dolores nostrum illum corporis tempora doloremque, sit modi voluptatibus non optio? Harum natus aspernatur nemo est maxime repellat sapiente numquam inventore, neque cupiditate amet fugiat consectetur expedita corporis velit, rem facere incidunt necessitatibus accusamus similique omnis corrupti eaque eius quasi? Nulla dolorem illum suscipit quis nobis laboriosam, vitae recusandae odit, impedit in ipsa sed expedita officiis saepe, debitis autem illo pariatur incidunt accusantium! Eius omnis dicta soluta nam a quae vitae maxime minus dignissimos, numquam voluptate? Facilis, laborum eum ex exercitationem architecto ipsum obcaecati beatae illum aspernatur debitis voluptatem at deserunt enim necessitatibus cumque assumenda perspiciatis, aliquid distinctio fugit voluptatum magni soluta, non ea. Officiis saepe, animi culpa ea pariatur unde ab quam vero eos, eaque sint adipisci architecto omnis ratione voluptatum ipsa velit provident iste? Earum voluptates sunt possimus velit corrupti assumenda, officiis ex error inventore unde harum architecto dolorem illum illo libero similique. Porro doloribus laborum esse atque, commodi excepturi nihil praesentium ullam quis nam, illo eos fugit dolores reiciendis autem. Animi natus maiores, sed cumque beatae ex recusandae. Nihil numquam veritatis dolores optio voluptates. Voluptatibus expedita cum eos fuga qui animi ratione modi minima velit nam ex, ipsum minus. Quasi architecto, voluptas deleniti hic voluptates dolorum amet esse officiis eligendi itaque, nulla minima vero harum quibusdam molestias! Quibusdam sapiente qui magnam nobis fugiat dolore ullam sequi soluta delectus quos quidem, placeat beatae adipisci ipsam, architecto officiis illum harum necessitatibus totam quae consequuntur error consectetur laborum? Veniam, culpa magnam eveniet porro autem tempore nihil optio, vero fugiat impedit minima excepturi hic. Iste natus nisi nihil rerum totam placeat ducimus, error culpa dicta, quo fugiat, quisquam ipsam quaerat maiores consequuntur at ratione delectus maxime! Iusto doloribus ullam velit magni fugiat illum doloremque! Commodi molestias porro sequi voluptate ullam dolor possimus nemo doloribus explicabo veniam nostrum quos cum, culpa fugit. Facilis suscipit nisi, unde cupiditate quasi fugit eaque cumque? Voluptates esse dolore earum dolor quaerat unde vitae ipsam voluptatibus. Asperiores corporis impedit quia pariatur accusantium natus suscipit delectus sed laboriosam tempora voluptatum maiores, quo consectetur recusandae molestias, adipisci consequatur illum. In, eos quas assumenda fugit vero, corrupti incidunt repellendus iste delectus impedit cumque. Modi, provident labore eaque aut deserunt optio tempore. Neque velit vero exercitationem eos tempore totam qui libero officiis quibusdam, quaerat natus repellendus. Cupiditate atque itaque id explicabo quasi laborum, modi ducimus culpa. Tenetur quas nobis mollitia aperiam? Dignissimos soluta dolore quia quaerat cumque, quasi voluptates consequuntur non perferendis et sit. Aspernatur laboriosam, exercitationem enim error impedit nisi culpa modi! Minus inventore, quos ullam tenetur facilis dicta optio maxime doloremque unde iste quibusdam voluptates eos animi aperiam pariatur veniam sequi sit cum et facere, ex perferendis. Quis quo explicabo aspernatur? Iste deleniti culpa quibusdam natus, cum perspiciatis facere unde, ducimus molestiae delectus fugiat dicta non quam perferendis illo expedita, sunt labore. Placeat recusandae adipisci assumenda sed ipsum. Laudantium autem commodi quam, dolore explicabo eligendi quod consequatur, dolorum ratione, atque asperiores corporis odio velit? Dolores accusamus, quisquam magnam possimus totam sunt porro quasi similique cum culpa rerum, dignissimos officia hic praesentium ducimus sapiente quis blanditiis adipisci cumque deleniti autem minima! Aspernatur itaque fugit reprehenderit rem deleniti, ex accusamus blanditiis, labore quisquam eos, maxime vero sit nemo nulla soluta alias ad! Deserunt quibusdam culpa autem ipsum possimus optio accusamus consectetur laborum excepturi, facilis quo sit, voluptatibus doloribus ex aperiam natus rem vero itaque delectus obcaecati nam! Nostrum aliquam vero qui perferendis necessitatibus ut cupiditate a pariatur fugiat asperiores. Itaque voluptate dolorem distinctio ab sint praesentium deleniti expedita voluptatum, commodi mollitia sequi asperiores molestiae explicabo tempore deserunt libero, aliquid nesciunt! Ducimus, animi modi, minus quas quibusdam earum, hic et fugit sit laborum pariatur voluptatem recusandae dolor! Optio laborum pariatur minus odio nisi, ea blanditiis voluptates quam error consequuntur hic. Quidem et modi, sint maiores officia amet, pariatur eligendi nostrum sit soluta, facere corrupti delectus? Placeat modi ex facilis harum cum nostrum fuga nam aliquam? Beatae fugit nemo eaque delectus placeat accusamus quis odit facilis officia, dicta assumenda! Quod ducimus minima provident, aperiam ipsa dolore dolor eos doloremque, amet tenetur, perferendis officiis sint nostrum est explicabo ex. Iste accusantium repellendus ab quia repudiandae molestias, nemo eius perspiciatis ipsa dicta sed autem mollitia placeat blanditiis, nostrum deleniti? Porro eveniet, aliquam debitis veniam aut expedita, tempore sapiente ab molestiae commodi, cupiditate libero esse impedit voluptates culpa autem? Iusto mollitia in, distinctio, aliquid labore, sit quas id facere repellendus tempora veniam? Debitis atque, quidem dicta, consectetur sequi dolorem quod, architecto excepturi labore quae totam officiis itaque pariatur!
            </div>

            <div className="bg-white w-full messages-input">
              <div>
                input field
              </div>
            </div>
            
          </div>
          <div className="w-sm-screen bg-gray-500 overflow-y-auto right-sidebar"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quia ipsa vero animi soluta nisi, minus totam doloribus aspernatur autem delectus facere, sequi eos a! Mollitia sequi voluptas vel at!</div>
        </section>

      </div>
      
    </section>
  );
};

export default App;