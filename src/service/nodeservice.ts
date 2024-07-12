import { Injectable } from '@angular/core';
    
@Injectable()
export class NodeService {
    getFileSystemNodesData() {
        return [  
            {  
                "data":{  
                    "name":"Applications",
                    "size":"200mb",
                    "type":"Folder",
                    "teste": "Teste"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"Angular",
                            "size":"25mb",
                            "type":"Folder",
                    "teste": "Teste"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"angular.app",
                                    "size":"10mb",
                                    "type":"Application",
                    "teste": "Teste"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"cli.app",
                                    "size":"10mb",
                                    "type":"Application",
                    "teste": "Teste"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"mobile.app",
                                    "size":"5mb",
                                    "type":"Application",
                    "teste": "Teste"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"editor.app",
                            "size":"25mb",
                            "type":"Application",
                    "teste": "Teste"
                        }
                    },
                    {  
                        "data":{  
                            "name":"settings.app",
                            "size":"50mb",
                            "type":"Application",
                    "teste": "Teste"
                        }
                    }
                ]
            }
             
            
        ]
    }
    
    getTreeNodes() {
        return Promise.resolve(this.getFileSystemNodesData());
    }
};