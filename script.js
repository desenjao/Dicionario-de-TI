 <script>
        function abrirFormulario() {
            document.getElementById("formulario").style.display = "block";
        }

        function fecharFormulario() {
            document.getElementById("formulario").style.display = "none";
        }

        function adicionarPalavra() {
            var termo = document.getElementById("termo").value;
            var definicao = document.getElementById("definicao").value;

            // Criar um item de lista para a nova palavra
            var novoItem = document.createElement("li");
            novoItem.innerHTML = "<strong>" + termo + ":</strong> " + definicao;

            // Adicionar o novo item à lista de palavras
            document.getElementById("lista-palavras").appendChild(novoItem);

            // Fechar o formulário após adicionar a palavra
            fecharFormulario();
        }
