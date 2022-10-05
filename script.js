
    var t1 = document.querySelector("div#t1")
    var t2 = document.querySelector("div#t2")
    var t3 = document.querySelector("div#t3")
    var t4 = document.querySelector("div#t4")

    function Ocultart1(){
        t1.innerHTML = '<input type="button" value="Traduzir" onclick="traducao1()">'
    }function Ocultart2(){
        t2.innerHTML = '<input type="button" value="Traduzir" onclick="traducao2()">'
    }function Ocultart3(){
        t3.innerHTML = '<input type="button" value="Traduzir" onclick="traducao3()">'
    }
    function Ocultart4(){
        t4.innerHTML = '<input type="button" value="Traduzir" onclick="traducao4()">'
    }

function traducao1(){
    t1.innerHTML = '<h1>Ferozes Noites, Emily Dickinson</h1> \
    <p> \
    Ferozes noites, Ferozes noites - !<br> \
    Eu estava com você<br> \
    Ferozes noites - como devem ser<br> \
    Nosso luxo!<br> \
    </p> \
    <p> \
    Vazio – os Ventos -<br> \
    Para um coração no porto -<br> \
    Feito com a bússola -<br> \
    Feito com o gráfico - !<br> \
    </p> \
    <p> \
    Remando no Éden -<br> \
    Ah, o Mar!<br> \
    E se eu pudesse -<br> \
    Esta noite -<br> \
    Em ti me amarrar!<br> \
    </p><input type="button" value="Ocultar" onclick="Ocultart1()">'
}


function traducao2(){
    t2.innerHTML = '<h1>Abaixo - Harriet Beecher Stowe</h1> \
    <p> \
        Varra ruidosamente os ventos do outono<br> \
        Sobre aquela sepultura solitária e amada,<br> \
        Onde colocamos aqueles cachos ensolarados,<br> \
        Quando aqueles olhos azuis se põem como estrelas,<br> \
        Deixando-nos nas trevas exteriores.<br> \
        Ó saudade e dor!<br> \
        Ó sepultura deserta e deserta!<br> \
    </p> \
    <p> \
        Deixe a grama ficar marrom sobre ti,<br> \
        Castanhos e murchos como os nossos sonhos!<br> \
        Deixe o vento gemer pelos pinheiros<br> \
        Com um assobio lúgubre, semelhante a um canto fúnebre,<br> \
        Varra as folhas mortas em seu seio,<br> \
        Gemendo, soluçando entre os galhos,<br> \
        Onde o verão ria tão alegremente.<br> \
    </p> \
    <p> \
        Ele se foi, nosso menino do verão,—<br> \
        Foi-se a luz de seus olhos azuis,<br> \
        Foi-se o coração terno e viril,<br> \
        Acabaram-se os sonhos e as aspirações,—<br> \
        Nada além do monte permanece,<br> \
        E a dor em nossos seios,<br> \
        Sempre dolorido, sempre latejando:<br> \
        Quem o trará ao descanso?<br> \
    </p><input type="button" value="Ocultar" onclick="Ocultart2()">'
}




function traducao3(){
    t3.innerHTML = '<h2>A Irmandade Superior - Madison Julius Cawein</h2> \
    <p> \
        Para ficar em contato com os mistérios<br> \
        Da beleza idealizando a Terra,<br> \
        Vá procurar as colinas, envelhecido com as árvores,<br> \
        As velhas colinas são sábias com morte e nascimento.<br> \
    </p> \
    <p> \
        Lá você provavelmente escutará o coração que bate<br> \
        Em fluxos, onde a música tem sua origem<br> \
        E em pedras selvagens de verdes retiros<br> \
        Observa a silenciosa alma da força.<br> \
    </p> \
    <p> \
        Acima do amor que emana<br> \
        Da paixão humana, e reflete<br> \
        A carne, deve ser o amor que aguarda<br> \
        Na natureza, onde os grandes elege<br> \
    </p> \
    <p> \
        Nenhum para seus segredos salva o pouco<br> \
        Que afirma que os fatos são bem menos reais<br> \
        Então sonhos, de onde todos fatos devem<br> \
        Aproximar do Ideal. <br> \
    </p> \  <input type="button" value="Ocultar" onclick="Ocultart3()">'
}

function traducao4(){
    t4.innerHTML = '<h1>Uma Medusa - Marianne Moore</h1> \
    <p> \
        Visível, invisível,<br> \
        Um encanto no espaço,<br> \
        Uma ametista de cor âmbar<br> \
        Habita; seu braço<br> \
        Abordagens, e<br> \
        Ele abre e<br> \
        Isso fecha;<br> \
        Você quis dizer<br> \
        Para pegá-lo,<br> \
        E murcha;<br> \
        Você abandona<br> \
        Sua intenção—<br> \
        Ele abre, e<br> \
        Fecha, e você,<br> \
        Alcança-o—<br> \
        O azul<br> \
        Ao seu redor<br> \
        Fica nublado, e<br> \
        Flutua para longe<br> \
        De você.<br> \
    </p> <input type="button" value="Ocultar" onclick="Ocultart4()">'
}




function surgir(item){
    item.classList.toggle("hide")
}
function desaparecer(item){
    setTimeout(() => {item.classList.toggle("hide")
}, 3000)
}
    var madison = document.getElementById('madison')
    var madisonItem = document.getElementById('madisonid')

    var death = document.getElementById('death')
    var deathItem = document.getElementById('deathid')

    var force = document.getElementById('force')
    var forceItem = document.getElementById('forceid')

    var earth = document.getElementById('earth')
    var earthItem = document.getElementById('earthid')

    var tree = document.getElementById('trees')
    var treeItem = document.getElementById('treeid')

    var birth = document.getElementById('birth')
    var birthItem = document.getElementById('birthid')

    var streams = document.getElementById('streams')
    var streamsItem = document.getElementById('streamsid')

    var soul = document.getElementById('soul')
    var soulItem  = document.getElementById('soulid')

    var flesh = document.getElementById('flesh')
    var fleshItem = document.getElementById('fleshid')

    var dreams = document.getElementById('dreams')
    var dreamsItem = document.getElementById('dreamsid')

    madison.addEventListener("mouseover",  () => surgir(madisonItem))
    madison.addEventListener("mouseout",  () => desaparecer(madisonItem))

    death.addEventListener("mouseover",  () => surgir(deathItem))
    death.addEventListener("mouseout",  () => desaparecer(deathItem))

    force.addEventListener("mouseover",  () => surgir(forceItem))
    force.addEventListener("mouseout",  () => desaparecer(forceItem))

    earth.addEventListener("mouseover",  () => surgir(earthItem))
    earth.addEventListener("mouseout",  () => desaparecer(earthItem))

    tree.addEventListener("mouseover",  () => surgir(treeItem))
    tree.addEventListener("mouseout",  () => desaparecer(treeItem))

    birth.addEventListener("mouseover",  () => surgir(birthItem))
    birth.addEventListener("mouseout",  () => desaparecer(birthItem))

    streams.addEventListener("mouseover",  () => surgir(streamsItem))
    streams.addEventListener("mouseout",  () => desaparecer(streamsItem))

    soul.addEventListener("mouseover",  () => surgir(soulItem))
    soul.addEventListener("mouseout",  () => desaparecer(soulItem))

    flesh.addEventListener("mouseover",  () => surgir(fleshItem))
    flesh.addEventListener("mouseout",  () => desaparecer(fleshItem))

    dreams.addEventListener("mouseover",  () => surgir(dreamsItem))
    dreams.addEventListener("mouseout",  () => desaparecer(dreamsItem))

