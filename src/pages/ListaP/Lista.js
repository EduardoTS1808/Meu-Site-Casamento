import React, { useState } from "react";

import './style.css'

import Carrinho from "../../components/Carrinho/Carrinho";
import MyButton from '../../components/ButtonPresentiar/MyButton'



export default function ListaP (){
    
    const imagesCozinha = [ 
        {id:4, title:'Boleira',    src:'./imagens/boleira.jpg'},
        {id:5, title:'Cafeteira',    src:'./imagens/cafeteira-grafite.jpg'},
        {id:6, title:'Colheres',    src:'./imagens/colheres-plastico.jpg'},
        {id:7, title:'Conjunto de Xicaras',    src:'./imagens/conjunto-xicaras.jpg'},
        {id:9, title:'Copos de Vidro',    src:'./imagens/copos.jpg'},
        {id:11, title:'Faqueiro Completo ',    src:'./imagens/faqueiro-completo.jpg'},
        {id:12, title:'Kit Facas ',    src:'./imagens/faqueiro-so-facas.jpg'},
        {id:13, title:'Forma Antiaderente',    src:'./imagens/forma-bolo.jpg'},
        {id:14, title:'Frígideiras Anteaderente ',    src:'./imagens/frigideiras.jpg'},
        {id:15, title:'Garrafa Témica  ',    src:'./imagens/garrafa-termica-cafe.jpg'},
        {id:16, title:'Jarra de Vidro ',    src:'./imagens/jarra-vidro.jpg'},
        {id:17, title:'Kit Banheiro ',    src:'./imagens/kit-banheiro.jpg'},
        {id:19, title:'Formas c/fundo Removível ',    src:'./imagens/kit-forma-bolo-fundo-removivel.jpg'},
        {id:20, title:'Kit Leiteira ',    src:'./imagens/kit-leiteira.jpg'},
        {id:21, title:'Porta Mantimentos ',    src:'./imagens/kit-porta-mantimentos.jpg'},
        {id:22, title:'Toalhas Corpo e Rosto ',    src:'./imagens/kit-toalha-corpo-rosto.jpg'},
        {id:23, title:'Kit Assadeira',    src:'./imagens/kit-travessa-inox.jpg'},
        {id:24, title:'Kit Travessa vidro',    src:'./imagens/kit-travessa-vidro.jpg'},
        {id:26, title:'Micro-Ondas',    src:'./imagens/microondas.jpg'},
        {id:27, title:'Panela de Pressão',    src:'./imagens/panela-de-pressao.jpg'},
        {id:1, title: 'Aparelho de Jantar', src:'./imagens/aparelho-de-jantar.jpg'},
        {id:29, title:'Tabua Passar',    src:'./imagens/tabua-passar-roupa.jpg'},
        {id:31, title:'Taças Sobremesa',    src:'./imagens/taças-sobremesa.jpg'},
        {id:32, title:'Kit Tapetes para Banheiro',    src:'./imagens/tapete-banheiro.jpg'},
        {id:33, title:'Panela Eletrica p/Arroz',    src:'./imagens/panela-arroz-eletrica.jpg'},
        {id:3, title:'Rede Cadeira de Balanço',    src:'./imagens/rede-cadeira-balanco.jpg'},
        {id:2, title:'Rede Gigante cinza',    src:'./imagens/rede-gigante.jpg'},
        {id:30, title:'Rede Gigante bege',    src:'./imagens/rede-gigante-2.jpg'},
        {id:34, title:'Panela de Pressão antiaderente',    src:'./imagens/panela-pressao.jpg'},
        {id:35, title:'Colcha de Cama',    src:'./imagens/colcha-cama-queen.jpg'},
        {id:36, title:'Escorredor Duplex Inox',    src:'./imagens/escorredor-duplex-inox.jpg'},
        {id:37, title:'Espremedor de Frutas 1,5l',    src:'./imagens/espremedor-frutas-1,5l.jpg'},
        {id:38, title:'Jogo de Lençol',    src:'./imagens/jogo-lencol.jpg'},
        {id:39, title:'Kit Escorredor Inox',    src:'./imagens/kit-escorredor-inox.jpg'},
        {id:40, title:'Jogo Lençol Fino',    src:'./imagens/kit-lencol-fino.jpg'},
        {id:41, title:'Jogo Panelas Anteaderente',    src:'./imagens/kit-panelas-ante-aderente.jpg'},
        {id:42, title:'Kit Tapetes para Banheiro',    src:'./imagens/kit-tapete-banheiro-2.jpg'},
        {id:43, title:'Kit Tapetes para Cozinha',    src:'./imagens/kit-tapete-cozinha.jpg'},
        {id:44, title:'Kit Tapetes para Cozinha',    src:'./imagens/kit-tapete-cozinha-2.jpg'},
        {id:45, title:'Lençol Elástico',    src:'./imagens/lencol-elastico.jpg'},
        {id:46, title:'Mop Esfregão Giratório',    src:'./imagens/mop-esfregao-giratorio.jpg'},
        {id:47, title:'Toalha de Mesa',    src:'./imagens/toalha-de-mesa.jpg'},
       
            ]
            
            const [lista, setLista] = useState(imagesCozinha);
            
            const adicionarItem = (newItem) => {
                setLista([...lista, newItem]);
                adicionar(newItem)
                
            }
            const [carrim, setCarrim] = useState([]);
            console.log(setCarrim)
            
            const adicionar = (y) => {
                carrim.push(y)
                
            }
        
           
            
            
            
            return(
                <>
                <div className="headComponent">
                <h1>Lista de Presentes</h1>
                </div>
                <div className="iconePresente">
                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="96" viewBox="0 0 121 96" fill="none">
                <path d="M120.944 44.1695C120.894 44.0142 120.8 43.8772 120.672 43.7759C120.544 43.6746 120.388 43.6137 120.226 43.6007L96.7263 42.1138L96.2572 42.084C96.2981 41.7123 96.3354 41.3405 96.3614 40.887C96.5029 38.7197 96.6183 36.519 96.7337 34.3888C96.7908 33.3083 96.8479 32.2265 96.905 31.1435C97.0688 28.1695 95.3265 26.5338 91.7226 26.2662C90.3452 26.2001 88.9649 26.2213 87.5901 26.3294C86.5896 26.4102 85.5853 26.435 84.582 26.4037L83.8932 26.3926L84.4331 26.2476C86.2945 25.7308 88.6847 24.9204 90.4605 23.2327C91.0208 22.7401 91.4375 22.1057 91.6668 21.3963C91.8119 20.7702 91.8259 20.1209 91.7077 19.4892C90.9631 13.9688 89.5708 9.82378 86.6929 4.74572L86.6333 4.77917C86.2595 3.62438 85.5896 2.58729 84.6904 1.77084C83.7911 0.954388 82.6936 0.386969 81.5068 0.124898C77.8658 -0.573986 74.5709 1.8052 72.4079 3.6565C68.756 6.78378 65.5405 10.3859 62.8473 14.3665C61.4787 16.3976 60.2449 18.5161 59.1541 20.7085C58.8885 21.2938 58.6864 21.9057 58.551 22.5338C58.3114 22.4417 58.0613 22.3793 57.8064 22.3479C56.8999 22.2897 55.9938 22.4692 55.178 22.8684C55.0497 22.1233 54.827 21.3975 54.5153 20.7085C53.4232 18.5169 52.1895 16.3984 50.8222 14.3665C48.1244 10.3849 44.9039 6.78279 41.2467 3.6565C39.0911 1.8052 35.7851 -0.573986 32.1478 0.124898C30.9629 0.384619 29.8665 0.949002 28.9672 1.76212C28.068 2.57524 27.3972 3.60887 27.0213 4.76059L26.9617 4.72713C24.0801 9.81635 22.6766 13.9502 21.9655 19.4706C21.8455 20.1034 21.8595 20.7543 22.0064 21.3814C22.2355 22.0887 22.6524 22.7208 23.2127 23.2104C24.9885 24.9018 27.3675 25.7123 29.2401 26.229L30.2714 26.5078C29.7763 26.4855 29.2588 26.4483 28.7264 26.4111C26.1501 26.2253 22.0697 25.7532 20.4167 27.2699C19.5418 28.0729 19.0876 29.255 19.069 30.7866C19.0504 32.2439 18.9983 33.7606 18.9424 35.2476C18.8829 37.0097 18.8196 38.8126 18.8121 40.6082L18.0675 40.8944C16.1465 41.6045 13.8643 42.3479 11.5077 42.4781C9.85373 42.5913 8.19297 42.5577 6.54497 42.3777L6.17267 42.3331C4.27396 42.1137 1.79447 40.8907 0 41.0357C0.253161 41.0357 3.72296 47.0803 4.15855 47.7271C5.50254 49.7085 6.39233 51.8163 7.8145 53.7383C8.73779 54.9911 13.4399 52.8907 14.6312 52.571C18.8047 51.4372 23.0973 50.2699 27.2893 48.2847C27.025 53.9502 26.7607 59.7606 26.6304 65.5041C26.5373 69.5115 26.8463 73.5338 27.1441 77.4297C27.401 80.8015 27.6691 84.2885 27.6691 87.7234C27.7063 92.1435 32.7807 94.0134 37.5163 94.2885C45.4648 94.7532 53.432 94.8164 60.9151 94.8424C64.2658 94.8424 67.9106 94.7532 72.3483 94.519C73.5935 94.4968 74.8384 94.5738 76.0713 94.7494C77.2505 94.9051 78.4375 94.9945 79.6267 95.0171C81.0543 95.0506 82.4706 94.7568 83.7667 94.1584C85.4755 93.3294 86.7041 91.5821 87.4114 88.9539C88.3533 85.4855 88.2565 81.6193 88.156 77.8795C88.1262 76.742 88.1002 75.6491 88.1039 74.6119C88.1039 72.7532 88.0518 70.8387 87.9997 68.9948C87.9103 65.7606 87.8135 62.4186 88.0369 59.2327C88.2528 56.1992 88.3347 53.0357 88.2975 49.6528C89.4937 50.4566 90.8004 51.0827 92.1768 51.5115C94.9058 52.3442 97.7613 52.2067 100.505 52.0729C101.294 52.0357 102.113 51.9985 102.906 51.9836C107.214 51.9056 110.233 52.8424 112.136 54.8535C112.26 54.9881 112.427 55.0749 112.608 55.0989C112.671 55.1082 112.735 55.1082 112.798 55.0989C112.921 55.0855 113.04 55.0452 113.145 54.981C113.251 54.9167 113.341 54.8301 113.409 54.7271C115.614 51.3444 118.07 48.1321 120.758 45.1175C120.869 44.9895 120.945 44.8346 120.978 44.6683C121.01 44.5019 120.999 44.33 120.944 44.1695ZM84.4591 28.3926C85.543 28.4335 86.6283 28.4099 87.7093 28.3219C88.9984 28.2173 90.2928 28.1937 91.5849 28.2513C94.4813 28.4632 95.0174 29.519 94.9355 31.0431C94.876 32.1249 94.8201 33.2104 94.7606 34.2922C94.6526 36.4149 94.5372 38.6119 94.3883 40.7643C94.3622 41.1361 94.3361 41.5487 94.2952 41.9353C93.0572 41.8262 91.8356 41.5768 90.6541 41.1918C87.4114 40.0766 84.8798 37.571 82.1993 34.9316C80.926 33.6788 79.6118 32.3814 78.2157 31.2513C76.8179 30.1403 75.3312 29.1456 73.7705 28.2773C74.6417 28.1992 75.5277 28.0952 76.4436 27.9613C79.1427 28.0766 81.8195 28.2178 84.448 28.3926H84.4591ZM86.6668 8.95761C88.2721 12.3611 89.3144 16.0018 89.7532 19.7383C89.8217 20.1069 89.8217 20.4849 89.7532 20.8535C89.6162 21.2172 89.3865 21.5388 89.0868 21.7866C87.6311 23.1695 85.55 23.8721 83.9007 24.3256C78.655 25.7755 74.1018 26.4818 70.0475 26.4632C67.5457 25.4223 64.9099 24.716 62.5085 24.7197C63.5187 24.5539 64.5414 24.4756 65.5651 24.4855C71.2277 22.6268 75.9894 19.5264 81.3504 15.3554C83.6512 13.5636 85.8403 11.5598 86.6557 8.95761H86.6668ZM84.9729 7.43345C84.6602 9.96505 82.4636 11.9874 80.133 13.7978C75.7474 17.203 71.7973 19.8684 67.4117 21.69C71.194 14.6116 77.4369 9.15793 84.9654 6.35538C85.0135 6.71298 85.016 7.07522 84.9729 7.43345ZM60.9263 21.5933C61.9809 19.4793 63.171 17.4354 64.4892 15.4743C67.0905 11.6408 70.1931 8.17145 73.7147 5.15836C76.6558 2.64163 79.0162 1.66021 81.1606 2.06914C81.8356 2.22028 82.4706 2.5133 83.0233 2.92867C83.576 3.34404 84.0338 3.87222 84.3661 4.47806C80.0523 6.06844 76.096 8.49494 72.725 11.6179C69.354 14.7409 66.6347 18.4987 64.7237 22.6751C63.3136 23.1297 61.8762 23.4947 60.42 23.768C60.4374 23.0161 60.6097 22.2758 60.9263 21.5933ZM55.8891 24.7123C56.4048 24.4369 56.9836 24.301 57.5682 24.3182C57.8021 24.3548 58.0244 24.4445 58.2181 24.5805C58.4118 24.7165 58.5715 24.8951 58.6851 25.1026C58.7551 25.2196 58.8113 25.3444 58.8526 25.4743C58.8056 25.5196 58.7632 25.5694 58.726 25.623C57.8102 25.623 56.8906 25.623 55.9673 25.623C55.8985 25.3246 55.8722 25.018 55.8891 24.7123ZM51.4551 29.3888C52.047 28.9465 52.8996 28.3071 53.5213 27.9019C52.9331 33.0642 52.4627 38.2439 52.1103 43.4409C47.1774 43.519 42.2519 43.5859 37.4269 43.6528L34.2848 43.6937C35.733 42.4111 37.036 41.0468 38.313 39.7085C39.7839 38.1131 41.3386 36.5967 42.9704 35.1658C45.0478 33.4037 47.4827 31.9502 49.601 30.7271C49.9584 30.5078 50.5392 30.0766 51.4551 29.3888ZM32.5238 2.06914C32.8355 2.00946 33.1521 1.97958 33.4694 1.97992C35.3533 1.97992 37.4418 3.00966 39.9548 5.15836C43.4709 8.17153 46.5674 11.641 49.1617 15.4743C50.4826 17.4337 51.6728 19.4777 52.7246 21.5933C53.0455 22.2746 53.2204 23.0153 53.2384 23.768C51.7684 23.4959 50.3173 23.1308 48.8937 22.6751H48.9272C47.0203 18.5016 44.3064 14.7456 40.9413 11.6228C37.5761 8.49991 33.6262 6.07184 29.3183 4.47806C29.6491 3.87103 30.1064 3.34189 30.6593 2.92634C31.2123 2.51078 31.8481 2.21847 32.5238 2.06914ZM28.6891 6.35538C36.2229 9.16006 42.4691 14.6195 46.2504 21.7048C42.721 20.2178 38.7486 17.8498 33.5178 13.7866C31.191 11.9762 28.9944 9.9539 28.6668 7.43345C28.6286 7.07459 28.6361 6.71235 28.6891 6.35538ZM29.7502 24.3182C28.1009 23.8647 26.0272 23.1621 24.5604 21.7792C24.262 21.531 24.0336 21.2094 23.8977 20.8461C23.8273 20.4777 23.8273 20.0993 23.8977 19.7308C24.3364 15.9944 25.3787 12.3536 26.984 8.95018C27.7994 11.5524 29.9885 13.5561 32.2855 15.3405C38.6444 20.281 44.1394 23.7271 51.3136 25.3777C50.744 25.5487 50.1632 25.69 49.5712 25.8201C48.7447 25.9167 47.9331 26.058 47.129 26.2327C42.2445 26.8387 36.5781 26.2067 29.7502 24.3182ZM20.9082 35.3145C20.9603 33.8275 21.0161 32.2996 21.0347 30.8164C21.0347 29.8424 21.2767 29.1621 21.7421 28.7346C22.7622 27.7978 26.4107 28.2401 28.5663 28.3963C29.6132 28.4922 30.6651 28.5245 31.7159 28.4929C33.8976 28.3703 36.1611 28.2476 38.4508 28.1212C39.2773 28.2253 40.0851 28.2996 40.8819 28.3517C37.6342 29.8725 34.4935 31.6113 31.4814 33.5561L30.2975 34.2996C27.2037 36.2327 24.0317 38.2104 20.7853 39.7271C20.8039 38.2513 20.8486 36.7643 20.9082 35.3145ZM14.1659 50.8498C12.364 51.3368 10.5099 51.8387 8.64472 52.4111C8.38783 51.5115 7.66186 49.9502 5.81154 47.0803C5.04089 45.8907 4.23673 44.7197 3.55543 43.7717C4.19206 43.8684 4.9776 43.9762 5.96046 44.0952L6.31414 44.1398C8.06901 44.3252 9.83688 44.355 11.597 44.229C14.2031 44.0877 16.6268 43.2922 18.6707 42.5338C23.0377 40.9167 27.2037 38.3145 31.2319 35.7978L32.4121 35.0543C38.6927 31.1584 44.5043 27.8795 51.0753 27.4706L50.394 27.9799C49.709 28.4929 49.0016 29.0245 48.7187 29.1844C46.5296 30.4483 44.0166 31.9465 41.8275 33.8052C40.1475 35.2759 38.5481 36.8358 37.036 38.4781C34.5268 41.1063 32.159 43.5859 28.8195 45.4781C24.0913 48.1584 19.2701 49.4632 14.1659 50.8498ZM37.6205 92.2922C36.8052 92.2439 29.6757 91.716 29.6422 87.6974C29.6422 84.1955 29.3742 80.6676 29.1098 77.2587C28.8157 73.4149 28.5104 69.452 28.6035 65.5301C28.7413 59.4297 29.0279 53.2364 29.3146 47.2253C29.4412 47.1546 29.5715 47.0877 29.6869 47.0134C30.3975 46.6099 31.0871 46.1707 31.7531 45.6974L37.4493 45.6156C42.2258 45.5524 47.1029 45.4855 51.9688 45.4074C51.0062 61.1888 51.1517 77.0181 52.4044 92.7792C47.5571 92.716 42.5758 92.5822 37.6019 92.2922H37.6205ZM60.4795 92.8424C58.4915 92.8424 56.4662 92.8238 54.4223 92.8015C53.1565 77.0506 54.1244 43.3888 54.1095 43.3926C54.4645 38.1212 54.946 32.8647 55.554 27.623C56.939 27.623 58.3165 27.6007 59.6865 27.6007C60.0613 32.8052 60.3616 38.0282 60.5875 43.2699C60.487 43.2736 61.2241 77.0468 60.4721 92.8424H60.4795ZM86.06 59.1063C85.8292 62.3888 85.926 65.7978 86.0191 69.0617C86.0712 70.8907 86.1233 72.7792 86.1196 74.6379C86.1196 75.716 86.1419 76.8052 86.1717 77.9613C86.261 81.5561 86.3541 85.2773 85.4904 88.4669C84.9357 90.5041 84.0645 91.8126 82.8843 92.3926C80.9856 93.3145 78.5806 93.0394 76.2574 92.7643C75.1362 92.6164 74.0077 92.5308 72.877 92.5078C72.6536 92.5078 72.434 92.5078 72.218 92.5078C68.4951 92.7048 65.3454 92.8089 62.449 92.8275C63.1936 77.0208 63.2606 61.0766 62.6351 45.2067C66.9984 45.1658 71.4176 45.3517 75.7064 45.5338L77.8918 45.6268C79.8538 45.7085 81.7637 45.716 83.6661 45.6974C84.5112 46.5524 85.375 47.3814 86.2722 48.1435C86.3727 52.0729 86.2983 55.6788 86.06 59.1063ZM61.7491 28.8201C62.8659 29.4706 64.0238 30.0543 65.1556 30.6268C66.7776 31.4011 68.3527 32.27 69.8726 33.229C73.3676 35.566 76.6025 38.269 79.5225 41.2922C80.1479 41.939 80.7808 42.623 81.384 43.281C81.518 43.4297 81.6557 43.5747 81.7935 43.7234C80.5277 43.7234 79.2581 43.6974 77.97 43.6453L75.7846 43.5524C71.4548 43.3665 66.9873 43.1807 62.5532 43.2216C62.3571 38.4161 62.0891 33.6168 61.7491 28.8238V28.8201ZM112.594 52.8795C111.022 51.5413 108.967 50.7123 106.376 50.3665C105.228 50.222 104.071 50.1636 102.914 50.1918C102.099 50.1918 101.268 50.2439 100.468 50.2848C97.724 50.4149 95.1329 50.5375 92.6496 49.7866C88.6884 48.5821 85.576 45.2364 82.5976 42.0022C81.9796 41.3368 81.3393 40.6453 80.7027 39.9874C77.701 36.8786 74.3748 34.0995 70.781 31.6974C69.2087 30.6992 67.5776 29.7967 65.8964 28.9948C64.3877 28.2655 62.9177 27.459 61.4922 26.5784C66.4102 26.0208 73.3424 29.6007 77.1882 32.7123C78.521 33.7978 79.7943 35.0617 81.0526 36.2885C83.7443 38.939 86.5291 41.6825 90.1069 42.9242C92.2327 43.6677 94.4516 43.8015 96.5923 43.9353L118.331 45.2959C116.273 47.7121 114.357 50.2455 112.594 52.8833V52.8795Z" fill="#1A2828"/>
                </svg>  
                </div>
                
                
                
                <div className="imagesCozinha">
                
                <div className="carroselItens" >
                {imagesCozinha.map((item) => (
                    <div className="ppp">
                    <>
                    <div className="card">
                    
                    <img key={item.id} src={item.src} alt="Imagem" className="image" />
                    
                    <p>{item.title}</p>
                    
                    <MyButton  onClick={()=> adicionarItem(item) } textoButton={"Presentear"}/>
                    
                    </div>                                
                    </>
                    </div>
                    ))}
                    </div>
                    </div>
                    
                    
                    <Carrinho dados={carrim}/>
                  
                    
                    
                    </>
                    )
                }
                
                