/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';






export const defaultNavigation: FuseNavigationItem[] = [
   



    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        children: [
            {
                id   : 'pages.recherche',
                title: 'Recherche',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/pages/recherche'
            },
            {
                id   : 'pages.personnes',
                title: 'Listes personnes',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/pages/personnes'
            },
            {
                id   : 'pages.bateaux',
                title: 'Listes bateaux',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/pages/bateaux'
            }
          
          

        ]
    },
  
 

  
  
];
export const compactNavigation: FuseNavigationItem[] = [
   

    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },

            
 
];
export const futuristicNavigation: FuseNavigationItem[] = [
    
 
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },



];
export const horizontalNavigation: FuseNavigationItem[] = [
  
    
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },

  

];

export const  roledefaultNavigation : any[] = [
    //  role 1  = Manager  
    {
        role : 1,
        defaultNavigation : defaultNavigation,
        compactNavigation :compactNavigation,
        futuristicNavigation: futuristicNavigation,
        horizontalNavigation: horizontalNavigation

    },
    //  role 1=2  = Operator 
    {
        role : 2,
        defaultNavigation : [
        
        
            {
                id      : 'pages',
                title   : 'Pages',
                type    : 'group',
                children: [
                    {
                        id   : 'pages.recherche',
                        title: 'Recherche',
                        type : 'basic',
                        icon : 'heroicons_outline:user-group',
                        link : '/pages/recherche'
                    },
                    {
                        id   : 'pages.personnes',
                        title: 'Listes personnes',
                        type : 'basic',
                        icon : 'heroicons_outline:user-group',
                        link : '/pages/personnes'
                    },
          
                    {
                        id   : 'pages.bateaux',
                        title: 'Listes bateaux',
                        type : 'basic',
                        icon : 'heroicons_outline:user-group',
                        link : '/pages/bateaux'
                    },
                  
        
                ]
            }
          
        
        
        ],
        compactNavigation :[
     
            {
                id      : 'pages',
                title   : 'Pages',
                tooltip : 'Pages',
                type    : 'aside',
                icon    : 'heroicons_outline:document-duplicate',
                children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
            }
       
                 
        ],
        futuristicNavigation: [

            {
                id      : 'pages',
                title   : 'Pages',
                type    : 'aside',
                icon    : 'heroicons_outline:document-duplicate',
                children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
            }
        
        ],
        horizontalNavigation: [

            
            {
                id      : 'pages',
                title   : 'Pages',
                type    : 'group',
                icon    : 'heroicons_outline:document-duplicate',
                children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
            }
        ]

    }
];