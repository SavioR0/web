# Tabelas 
Aula dedicada à criação de tabelas em HTML. Como são organizadas as linhas e suas partições. Foi aplicado o atribulo colspan e rowspan para fazer a mesclagem das celulas.
Durante a aula , foi criada uma tabela com a grade das disciplinas cursada. A tabela possui nome, email , as matérias, as atividade , as notas e sua somas, e por fim se o alunos está ou não aprovado naquela matéria. A seguir tem-se a tabela criada em arquivo html. 

<table border="border-collapse" >
        <th colspan="5">Tabela de Notas</th>
        <tr align="left"><td colspan="5"> <b>Email : </b> saviorodrigues012@gmail.com</td></tr>
        <tr align="left"><td colspan="5"><b>Nome :</b> Sávio Rodrigues</td></tr>
        <tr>
            <td align="center"> <b>Diciplina</b>  </td>
            <td align="center"><b>Atividade</b>  </td>
            <td align="center"><b>Nota</b>  </td>
            <td align="center"><b>Total</b>  </td>
            <td align="center"><b>Status</b> </td>
        </tr>
        <tr>
            <td rowspan="3">CONTROLE DIGITAL DE SISTEMAS DINÂMICOS </td>
            <td>ATV1</td>
            <td>3</td> 
            <td rowspan="3" >7</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="3">ORGANIZAÇÃO EMPRESARIAL A </td>
            <td>ATV1</td>
            <td>3</td> 
            <td rowspan="3" >7</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="3">TÓPICOS ESPECIAIS EM NEGÓCIOS DE MODA: STARTUPS: COMO DESENVOLVER NEGÓCIOS INOVADORES</td>
            <td>ATV1</td>
            <td>3</td> 
            <td rowspan="3" >9</td> 
            <td rowspan="3"> <i>Aprovado</i> </td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>3</td>
        </tr>
        <tr>
            <td rowspan="3">LABORATÓRIO DE CONTROLE DIGITAL DE SISTEMAS DINÂMICOS </td>
            <td>ATV1</td>
            <td>3</td> 
            <td rowspan="3" >8</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>1</td>
        </tr>
        <tr>
            <td rowspan="3">TÓPICOS ESPECIAIS EM NEGÓCIOS DE MODA: STARTUPS: COMO DESENVOLVER NEGÓCIOS INOVADORES</td>
            <td>ATV1</td>
            <td>2</td> 
            <td rowspan="3" >6</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="3">TÓPICOS ESPECIAIS EM PROGRAMAÇÃO DE COMPUTADORES: C++ MODERNO</td>
            <td>ATV1</td>
            <td>2</td> 
            <td rowspan="3" >6</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="3">TÓPICOS ESPECIAIS EM PROGRAMAÇÃO DE COMPUTADORES: PROGRAMAÇÃO WEB I  </td>
            <td>ATV1</td>
            <td>3</td> 
            <td rowspan="3" >7</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>0</td>
        </tr>
        <tr>
            <td rowspan="3">TRABALHO DE CONCLUSÃO DE CURSO I</td>
            <td>ATV1</td>
            <td>3</td> 
            <td rowspan="3" >10</td> 
            <td rowspan="3"><i>Aprovado</i></td> 
        </tr>
        <tr>
            <td>ATV2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>ATV3</td>
            <td>4</td>
        </tr>
      </table> 

Além disso foi indicado que ultilizasse negrito, itálico e que colocasse um título na tabela.