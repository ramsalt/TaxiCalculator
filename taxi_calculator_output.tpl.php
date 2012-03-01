<div id="kart">
</div>
<div id="searchForm">
<form id="mainForm" action="#" onsubmit="setDirections(this.from.value, this.to.value, locale); return false" >
<div class="Fra">
Fra: <label><input type="text" id="fromAddress1" name="from" 
value=<?php if ($_GET['from']) echo '"'.$_GET['from'].'"'; else echo '"Flyplassvegen 7, Tromsø"' ?>  class="inputText" />
</label>
</div>
<div class="Til">
Til: <label><input type="text" id="toAddress1" name="to" 
value= <?php if ($_GET['to']) echo '"'.$_GET['to'].'"'; else echo '"Kirkegata 12, Tromsø"' ?>  class="inputText" />
</label>
<div class="clearDiv"></div> 

</div>
<div class="Radios">
<div id="f1">
<label><input type="radio" id="praie" name='valg' class="inputRadio" 
<?php if ($_GET['valgB']=="praie") {echo 'CHECKED';} else echo 'CHECKED' ?> onClick="regnuttakst()" /> Praie</label>
</div>
<div id="f1">
<label><input type="radio" id="ringe" name='valg' class="inputRadio" 
<?php if ($_GET['valgB']=="ringe") echo 'CHECKED'; ?> onClick="regnuttakst()" /> Ringe</label>
</div>
<div id="f1">
<label><input type="radio" id="bestille" name='valg' class="inputRadio" 
<?php if ($_GET['valgB']=="bestille") echo 'CHECKED'; ?> onClick="regnuttakst()" /> Forhåndsbestille</label>
</div>
<div id="f1">
&nbsp;&nbsp;&nbsp;
</div>

</div> <!-- end radios added-->


<!-- </div> -->
<div id="passangerSelect">

<div id="f1">
Avreisetidspunkt:  
</div>
<div id="f1">
<select class="selectOptions" id="select_day1" name="daynr" onClick="regnuttakst()">
<?php 
if ($_GET['daynrB']=="now") echo '<option value="now" selected="selected" >i dag</option>'; 
else echo '<option value="now">i dag</option>';
?>
<?php 
if ($_GET['daynrB']=="1") echo '<option value="1" selected="selected" >Mandag</option>'; 
else echo '<option value="1">Mandag</option>';
?>
<?php 
if ($_GET['daynrB']=="2") echo '<option value="2" selected="selected">Tirsdag</option>'; 
else echo '<option value="2">Tirsdag</option>';
?>
<?php 
if ($_GET['daynrB']=="3") echo '<option value="3" selected="selected">Onsdag</option>'; 
else echo '<option value="3">Onsdag</option>';
?>
<?php 
if ($_GET['daynrB']=="4") echo '<option value="4" selected="selected">Torsdag</option>'; 
else echo '<option value="4">Torsdag</option>';
?>
<?php 
if ($_GET['daynrB']=="5") echo '<option value="5" selected="selected">Fredag</option>'; 
else echo '<option value="5">Fredag</option>';
?>
<?php 
if ($_GET['daynrB']=="6") echo '<option value="6" selected="selected">Lørdag</option>'; 
else echo '<option value="6">Lørdag</option>';
?>
<?php 
if ($_GET['daynrB']=="7") echo '<option value="7" selected="selected">Søndag</option>'; 
else echo '<option value="7">Søndag</option>';
?>
</select>
</div>

<div id="f1">
<select class="selectOptions" id="select_hour1" name="hournr" onClick="regnuttakst()">
<?php 
if ($_GET['hournrB']=="now") echo '<option value="now" selected="selected">nå</option>'; 
else echo '<option value="now">nå</option>';
?>
<?php 
if ($_GET['hournrB']=="0") echo '<option value="0" selected="selected">00</option>'; 
else echo '<option value="0">00</option>';
?>
<?php 
if ($_GET['hournrB']=="1") echo '<option value="1" selected="selected">01</option>'; 
else echo '<option value="1">01</option>';
?>
<?php 
if ($_GET['hournrB']=="2") echo '<option value="2" selected="selected">02</option>'; 
else echo '<option value="2">02</option>';
?>
<?php 
if ($_GET['hournrB']=="3") echo '<option value="3" selected="selected">03</option>'; 
else echo '<option value="3">03</option>';
?>
<?php 
if ($_GET['hournrB']=="4") echo '<option value="4" selected="selected">04</option>'; 
else echo '<option value="1">04</option>';
?>
<?php 
if ($_GET['hournrB']=="5") echo '<option value="5" selected="selected">05</option>'; 
else echo '<option value="5">05</option>';
?>
<?php 
if ($_GET['hournrB']=="6") echo '<option value="6" selected="selected">06</option>'; 
else echo '<option value="6">06</option>';
?>
<?php 
if ($_GET['hournrB']=="7") echo '<option value="7" selected="selected">07</option>'; 
else echo '<option value="7">07</option>';
?>
<?php 
if ($_GET['hournrB']=="8") echo '<option value="8" selected="selected">08</option>'; 
else echo '<option value="8">08</option>';
?>
<?php 
if ($_GET['hournrB']=="9") echo '<option value="9" selected="selected">09</option>'; 
else echo '<option value="9">09</option>';
?>
<?php 
if ($_GET['hournrB']=="10") echo '<option value="10" selected="selected">10</option>'; 
else echo '<option value="10">10</option>';
?>
<?php 
if ($_GET['hournrB']=="11") echo '<option value="11" selected="selected">11</option>'; 
else echo '<option value="11">11</option>';
?>
<?php 
if ($_GET['hournrB']=="12") echo '<option value="12" selected="selected">12</option>'; 
else echo '<option value="12">12</option>';
?>
<?php 
if ($_GET['hournrB']=="13") echo '<option value="13" selected="selected">13</option>'; 
else echo '<option value="13">13</option>';
?>
<?php 
if ($_GET['hournrB']=="14") echo '<option value="14" selected="selected">14</option>'; 
else echo '<option value="14">14</option>';
?>
<?php 
if ($_GET['hournrB']=="15") echo '<option value="15" selected="selected">15</option>'; 
else echo '<option value="15">15</option>';
?>
<?php 
if ($_GET['hournrB']=="16") echo '<option value="16" selected="selected">16</option>'; 
else echo '<option value="16">16</option>';
?>
<?php 
if ($_GET['hournrB']=="17") echo '<option value="17" selected="selected">17</option>'; 
else echo '<option value="1">17</option>';
?>
<?php 
if ($_GET['hournrB']=="18") echo '<option value="18" selected="selected">18</option>'; 
else echo '<option value="18">18</option>';
?>
<?php 
if ($_GET['hournrB']=="19") echo '<option value="19" selected="selected">19</option>'; 
else echo '<option value="19">19</option>';
?>
<?php 
if ($_GET['hournrB']=="20") echo '<option value="20" selected="selected">20</option>'; 
else echo '<option value="1">20</option>';
?>
<?php 
if ($_GET['hournrB']=="21") echo '<option value="21" selected="selected">21</option>'; 
else echo '<option value="21">21</option>';
?>
<?php 
if ($_GET['hournrB']=="22") echo '<option value="22" selected="selected">22</option>'; 
else echo '<option value="22">22</option>';
?>
<?php 
if ($_GET['hournrB']=="23") echo '<option value="23" selected="selected">23</option>'; 
else echo '<option value="23">23</option>';
?>
</select>
</div>
<div id="f1">
Antall passasjerer:
</div>
<div id="f1">
<select class="selectOptions" id="selectPassangerCount" name="passangerCount" onClick="regnuttakst()">
<option value="1">1-4</option>
<option value="2">5-8</option>
<option value="3">9-11</option>
<option value="4">12-15</option>
</select>
</div>
</div> <!-- end div passangerSelect -->


<div class="formButton">
<input src="<?php print base_path().drupal_get_path('module', 'taxi_calculator')?>/images/priskalkulator-bereign.png" type="image"/>
</div>

</form>
<div class="clearDiv"></div>
</div>            
<div id="results">
</div>
<div id="otherTaxis">
</div>
<div id="routeGuide">
</div>
<div id="leftColumn">
<div id="prisinfo"></div>   
</div><!--end leftColumn-->
<div id="rightColumn">
<div id="detaljer">
</div>
</div>
<!-- END MAIN PAGE -->
