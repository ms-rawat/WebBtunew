import dynamic from "next/dynamic";
let paper =()=>{

    return(

        <>
        <main>

         <table>
       <tr>
                         <th>Year </th>
                         <th>Subject Name</th>
                         <th> Links</th>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td> math</td>
                        <td> <a href="#"></a></td>
                    </tr>
       </table>

        </main>

    
        </>
       
        
          
      


                 

              

                   
                
         
     
    )
}

export default dynamic (()=> Promise.resolve(paper),{ssr : false});