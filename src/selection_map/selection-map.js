
//Filtering movies and series based on the selection
export default function  selectionFilter({series,films,India}){
    return{
        series: [
            {
                title:'Documentaries',
<<<<<<< HEAD
                data: series.filter((item)=> item.genre === 'documentaries'),
            },
            {
                title:'Comedies',
                data: series.filter((item)=>item.genre === 'comedies'),
            },
            {
                title:'Children',
                data: series.filter((item)=>item.genre === 'children'),
            },
            {
                title:'Crime',
                data: series.filter((item)=>item.genre === 'crime'),
=======
                episode_data :[{
                    title :'Pilot',
                    slug:'E1'
                },
                {
                    title :'Diversity Day',
                    slug:'E2'
                },
                {
                    title:'Health Care',
                    slug:'E3'
                },
                {
                    title:'The Alliance',
                    slug:'E4'
                },
                {
                    title:'Basketball',
                    slug:'E5'
                },
                {
                    title:'Hot Girl',
                    slug:'E6'
                }

            ],
                data: series.filter((item)=> item.genre == 'documentaries'),
            },
            {
                title:'Comedies',
                episode_data :[{
                    title :'Pilot',
                    slug:'E1'
                },
                {
                    title :'Diversity Day',
                    slug:'E2'
                },
                {
                    title:'Health Care',
                    slug:'E3'
                },
                {
                    title:'The Alliance',
                    slug:'E4'
                },
                {
                    title:'Basketball',
                    slug:'E5'
                },
                {
                    title:'Hot Girl',
                    slug:'E6'
                }

            ],
                data: series.filter((item)=>item.genre == 'comedies'),
            },
            {
                title:'Children',
                episode_data :[{
                    title :'Pilot',
                    slug:'E1'
                },
                {
                    title :'Diversity Day',
                    slug:'E2'
                },
                {
                    title:'Health Care',
                    slug:'E3'
                },
                {
                    title:'The Alliance',
                    slug:'E4'
                },
                {
                    title:'Basketball',
                    slug:'E5'
                },
                {
                    title:'Hot Girl',
                    slug:'E6'
                }

            ],
                data: series.filter((item)=>item.genre == 'children'),
            },
            {
                title:'Crime',
                episode_data :[{
                    title :'Pilot',
                    slug:'E1'
                },
                {
                    title :'Diversity Day',
                    slug:'E2'
                },
                {
                    title:'Health Care',
                    slug:'E3'
                },
                {
                    title:'The Alliance',
                    slug:'E4'
                },
                {
                    title:'Basketball',
                    slug:'E5'
                },
                {
                    title:'Hot Girl',
                    slug:'E6'
                }

            ],
                data: series.filter((item)=>item.genre == 'crime'),
>>>>>>> earlier-changes-v2
            }
        ],

        films: [
            { 
                title: 'Drama', 
                data: films?.filter((item) => item.genre === 'drama') 
            },
            { 
                title: 'Thriller', 
                data: films?.filter((item) => item.genre === 'thriller') 
            },
            { 
                title: 'Children',
                data: films?.filter((item) => item.genre === 'children') 
            },
            { 
                title: 'Suspense', 
                data: films?.filter((item) => item.genre === 'suspense') 
            },
            { 
                title: 'Romance', 
                data: films?.filter((item) => item.genre === 'romance') 
            },
            {
                title:'Feel Good',
                data: films?.filter((item)=>item.genre === 'feel-good'),
            }
          ],

        India :[
            {
                title :'Comedy',
                data :India?.filter((item) => item.genre ==='comedy')

            },
            {
                title :'Drama',
                data :India?.filter((item) =>item.genre === 'drama')
            },
            {
                title :'Action',
                data : India?.filter((item) =>item.genre === 'action')
            },
            {
                title :'Thriller',
                data :India?.filter((item) =>item.genre ==='thriller')
            },
            {
                title :'Crime',
                data :India?.filter((item) =>item.genre ==='crime')
            },
        ]
    }
}