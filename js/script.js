let cad = `
<div class="logo"><a class="link-logo" href="index.html"><img class="logo-imagen" src="imagenes/logo.png"
alt="logo"></a></div>
<nav class="navegacion" name="navegacion">
    <span class="span">
        <a href="index.html" class="navega">
            <i class="fa-solid fa-user fontawesome"></i>Personas
        </a>
    </span>
    <span class="span">
        <a href="empresas.html" class="navega">
            <i class="fa-solid fa-building fontawesome"></i>Empresas
        </a>
    </span>
    <span class="span">
        <a href="institucional.html" class="navega">
            <i class="fa-solid fa-building-columns fontawesome"></i>Institucional
        </a>
    </span>
    <span class="span">
        <a href="Formulario.html" class="navega">
            <i class="fa-solid fa-envelope fontawesome"></i>Trabajá con nosotros
        </a>
    </span>
</nav>
`
document.getElementById("idheader").innerHTML = cad;

cad = `
<div class="pie">
                <div class="legal">
                    <p>
                        © Bank Argentina S.A. 2022
                    </p>
                    <p>
                        Bank Group
                    </p>
                    <p>
                        Este website está diseñado para ser usado en la República Argentina
                    </p>
                </div>
                <div class="terminos">
                    <a href="#" class="condiciones">Recursos Humanos</a>
                    <a href="#" class="condiciones">Política de Privacidad</a>
                    <a href="#" class="condiciones">Términos y Condiciones</a>
                    <a href="#" class="condiciones">Gerenc. de Riesgos Operativos</a>
                </div>
            </div>
            <div class="social">
                <a href="https://www.facebook.com/" class="socialmedia" target="_blank"><i
                        class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/" class="socialmedia" target="_blank"><i
                        class="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/" class="socialmedia" target="_blank"><i
                        class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/" class="socialmedia" target="_blank"><i
                        class="fa-brands fa-instagram"></i></a>
            </div>
`
document.getElementById("idfooter").innerHTML = cad;
