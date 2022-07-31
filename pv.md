# <a name="top"></a>PV solar power photovoltaik

#### Table of Contents

<div id="toc"></div>

## General

Information sources and todo:

- [Design Your Own
Raw LiFePO4 Cell Battery ​Solar Power System](https://www.mobile-solarpower.com/design-your-own-12v-lifepo4-system.html)
- [New to Life PO4](https://diysolarforum.com/threads/new-to-life-po4.34393/) &ndash; great new thread on various voltage settings
- [diysolarforum.com](https://diysolarforum.com)
- YouTube will prowse and andreas schmitz
- [Praxiserfahrungen mit einer Mini-Solaranlage im Jahr 2013](https://www.heise.de/ct/ausgabe/2013-19-Praxiserfahrungen-mit-einer-Mini-Solaranlage-2315372.html)
- [Solaranlage](https://www.ebay.de/itm/Mini-Solaranlage-zur-Einspeisung-in-die-Steckdose-285-Watt-fur-230V-Hausnetz/322395891062)
- install solar hot water panels along dachfirst
- install solar electrical panels along dachfirst or on south walmdach
- delzer decade-long experience with his solar pv system

Selbstbauprojekte zum Basteln und Experimentieren:

- [Build-It-Solar](https://www.builditsolar.com/GettingStarted/GettingStarted.htm)
 &ndash; Plans, tools and information to help you build renewable energy and conservation projects.
 - [Mitch HotBox](https://www.builditsolar.com/Projects/SpaceHeating/Mitchhotbox.pdf)
- [Kleine Solaranlage selber bauen](https://wohnen-heimwerken.de/kleine-solaranlage-selber-bauen-bauanleitung-insel-photovoltaikanlage.html)
- [Kleine 400W Solaranlage selber bauen](https://wohnen-heimwerken.de/photovoltaik-kleine-400w-solaranlage-selber-bauen.html)

<!--

From: Jeremy Tammik <jeremy.tammik@autodesk.com>
Date: Sunday, 12 June 2022 at 15:41
To: Marco Burda <mbexorbital@web.de>
Subject: Energie und Nachhaltigkeit

Hallo Marco,
 
Vielen dank fuer deine sehr interessanten infos und tips. 
 
Das interessiert mich alles sehr.
 
Darf ich noch ein paar weitere fragen stellen, zur dimensionierung und solche details, da ich selbst auch mitten in der planung von aehlichen anlagen stehe und viele unterschiedliche und zum teil widersprueckhliche aussagen zu hoeren bekomme?
 
Daher waere es besonders wertvoll, von dir ein paar eckdaten zu erfahren von einem system das tatsaechlich verhebt.
 
Ich will dich nicht belaestigen damit, wuerde mich aber sehr ueber weitere ratschlaege freuen!
 
Warmwasser-Waermepumpe: 
 
- Du hast ein modell von Vaillant genannt. Welches modell war es genau?
- Wo holt er die warme temperatur her? 
- Aus der Luft, oder ein anderes medium? 
- Aus der frischlufft draussen, oder im Haus drin, z.B. im Keller? 
- Welche leistung hat sie (stromverbrauch + erzeugte ww-energiemenge)? 
- Heizt sie einen boiler? Wie gross ist der?
 
PV-Anlage:
 
- Wie viel kW peak haben die PV-panele? Ich glaube, du hast mal 15 kW gesagt. Stimmt das?
- Ich glaube, du sagtest, die batterie hat 5.5 kWh. Stimmt das? Welche Voltzahl? 12, 24, 48, oder was anderes? LiFePO4?
- Hast du zwei getrennte ladegeraete fuer die Ost-Panele und die Sued-Panele, oder sind sie einfach zusammengehaengt an ein einziges Ladegeraet?
- Wie hast du deine PV-panele konfiguriert? Wie viel Volt gesamt, wie viel Ampere, wie sind sie zusammengeschlossen?
- Hast du eine BMS installiert, oder ist sie in die Batterie integriert?
- Was fuer einen Inverter hast du? Wie viele kW kann sie leisten?
 
Hausheizung:
 
Du hast gesagt, die waermepumpe macht nur warmwasser. Wie wird das haus sonst geheizt? Eine Gasheizung? Hat sie einen Speicher? Wie gross? Heizt du auch zusaetlich mit Stueckholz und Kaminofen, wegen gemuetlichkeit?
 
Ich hoffe, das sind nicht zu viele fragen… 
 
Ganz herzlichen dank.fuer die infos und deine super gute initiative und vorreiterrolle!
 
Liebe gruesse
 
jeremy

-->

## Links

- [DIY Off Grid Solar Charge Controllers](https://www.mobile-solarpower.com/solar-charge-controllers.html)
- [DIY solar electric projects forum](https://diysolarforum.com)
- [Battery](https://www.aliexpress.com/item/4001217714484.html)
- [Laderegler solar charger](https://www.amazon.de/EPEVER-Solarladeregler-Solarmodul-automatisch-identifizieren/dp/B071GRK4J8/ref=sr_1_1_sspa)

## Components

- [Solar panel](#solar-panels): mounting, connecting, cables, diodes
- [Charge controller](#charge-controller): eur 100
- [Batteries](#batteries): 4 x 3.2 V 280 Ah
- [Battery management system BMS](#bms-battery-management-system): ca. eur 500
- [Inverter](#inverter): co has a good one for eur 400

### System Sizing

According to the [MPP Solar system siozing guide](https://www.mppsolar.com/v3/system-sizing),
the most important and common questions every system designer faces are:

- How big of a solar array should I install?
- How big of a battery bank should I install?

These questions can be answered by using simple arithmetic operations.
Solar array sizing requires calculating the total energy in kWh and divide it by the number of peak sun hours.
Battery bank sizing also starts out with the total energy requirement, the backup days in case of no sun and the maximum battery DOD (depth of discharge):

Solar array sizing calculation:

<center>
W = E ÷ G ÷ Ksys
</center>

Where

- W  = peak wattage of the array required in kW
- E = daily energy requirement in kWh
- G = average daily number of peak sun hours on site
- Ksys = total system efficiency factor; varies, but may use 0.7 as average

Battery bank sizing calculation:

<center>
Q = ( E x A ) ÷ ( V x T x Kinv x Kcable )
</center>

- Q = minimum battery capacity required in Ah
- E = the daily energy requirement in Wh
- A = the number of days of backup required
- V = the system DC voltage in V
- T = the maximum allowable DOD (Depth of Discharge) of the battery (recommended by battery supplier)
- Kinv = inverter efficiency; equals 1 if there is no inverter
- Kcable  = the efficiency of the cables delivering the power from battery to loads (typically 95-97% based on 3-5% loss)


## Consumption

### Treppenlicht

Beispiel Treppenlicht im Huenerbergweg 30:

- Verbrauch ca. 350 kWh p.a., im Schnitt ca. 1 kWh p.d., wobei im Winter sicher viel mehr pro Tag anfaellt
- Faustregel 1:1:1 &ndash; 0.35 MWh p.a. &rarr; 0.35 kWp (p steht für Peak) Solarmodul-Anlage und 0.35 kWh Akku als Richtwert;
- Ein 12V 30 Ah Akku entspricht rechnerisch 0.36 kWh.

Verbraucher:

- Klingeltrafo 4-6-8 V 1 A uses less than 15 W
- Treppenhaus Licht oben und unten je 15 W
- Kellerlicht 5 &middot; 15 W
- Total max simultaneous load 8 &middot; 15 = 120 Watt
- Assuming the Treppenlicht was running non-stop for 6 hours: 30 W &middot; 6 h = 180 Wh
- So, to run just lighting and doorbells, 0.2 kWh ought to suffice; a 12 V 40 Ah battery will provide 0.48 kWh 
- LED CRI 95 is good (natural sunlight is CRI 100)
- [450 LED flexible strip light roll 12V CRI 95 LED 3000K Warm White](https://www.amazon.de/gp/product/B07VVMTQ5T/ref=ox_sc_act_title_8), ca. 10 Lumen per LED
- Prepare a 220 V charger for the 12 V battery, in case it runs out
- Lay a new 220 V cable from the 12 V solar power inverter down to the basement wall plugs

Maybe we ought to run a new 220 V line down to the basement, and just hook up the plugs to new wires.

We could also grab the 220 V for the plugs from the drehstrom installation...

Or both, in parallel, in case the battery runs out...

### Moniwonig

Main consumer is [Moni's fridge](file:///UsersUsers/jta/j/doc/hardware/manual/bomann_kuehlschrank/EU_Datenblatt_KG_185.pdf):
it uses 0.522 kWh per day, 190 kWh per year.

2021-04-07 18:00 started monitoring fridge electricity consumption
using [Pearl SD-2209-675](https://www.pearl.de/a-SD2209-3102.shtml), originally [revolt  SD-2209-675](https://www.revolt-power.de/Digitaler-Energiekostenmesser-Stromverbrauchszaeh-SD-2209-919.shtml).

<!-- Drücken Sie wiederholt auf die Mode-Taste, um durch die Einstellungen zu wechseln: W - V - Total KWh - Total € - € KWh. (Leistung, Spannung, Energieverbrauch insgesamt, Kosten insgesamt, eingestellter Strompreis pro Kilowattstunde) Drücken Sie lange auf die Mode-Taste, um Ihren Strompreis pro Kilowattstunde einzustellen. Die aktuelle Anzeige blinkt. Drücken Sie die Up-Taste, um die Einstellung vorzunehmen. Drücken Sie erneut die Mode-Taste, um zur nächsten Anzeige zu gelangen. Um die Einstellung abzuschließen, drücken Sie lange auf die Mode-Taste. Wenn Sie länger keine Eingabe vornehmen, kehrt das Gerät automatisch zum Startbildschirm zurück. Die Einstellungen werden dabei auch übernommen. Alle Echtzeitdaten werden jede Sekunde aktualisiert. Auf Werkseinstellung zurücksetzen: Wenn im Display eine unnormale Anzeige zu sehen ist oder die Tasten nicht mehr reagieren, setzen Sie das Gerät auf Werkseinstellungen. Drücken Sie dazu mit einem spitzen Gegenstand auf die Reset-Taste. Das Gerät wird auf Werkseinstellung zurückgesetzt. Die Daten werden dabei gelöscht. Die Einstellung der Energiekosten pro KWh bleibt jedoch erhalten. -->

- 0.5 kWh per day might be satisfied by ca. 400 peak Watts, i.e., 3 qm solar panels
- 4 Stueck [Solarpanel 100 Watt 12 V](https://www.ebay.de/itm/Solarpanel-Solarmodul-100Watt-12V-12Volt-Solarzelle-Solar-Poly-Polykristallin/202982424608)
- Lowest yield in November is ca. 15% of highest yield in July
- Assuming a July daily yield of 400 W &middot; 0.7 efficiency &middot; 6 h = 1680 Wh, the November one might be just 250 Wh

### Moniwonig 2022-07-22

Moniwonig yield empirical results in July 2022;
unfortunately, January 2022 is missing; the PV system was down then.
East panel charger yield E from 400 Wp, consumption C and average E and C per day in kWh on various later dates between February and Julky 2022:

<center>
<table class="r">
<tr><td>date</td><td>days</td><td>C</td><td>E</td><td>C/d</td><td>E/d</td></tr>
<tr><td>2022-02-05</td><td>n.a.</td><td>155</td><td>42</td><td>n.a</td> <td>n.a.</td></tr>
<tr><td>2022-02-10</td><td>5</td><td>164</td>   <td>45</td><td>1.5</td> <td>0.48</td></tr>
<tr><td>2022-02-20</td><td>10</td><td>176</td>  <td>48</td><td>1.2</td><td>0.30</td></tr>
<tr><td>2022-03-02</td><td>10</td><td>193</td>  <td>52</td><td>1.5</td> <td>0.47</td></tr>
<tr><td>2022-03-19</td><td>17</td><td>221</td>  <td>62</td><td>1.7</td> <td>0.56</td></tr>
<tr><td>2022-07-22</td><td>125</td><td>571</td> <td>169</td><td>2.8</td><td>0.85</td></tr>
</table>
</center>

## Solar Analysis

- Dachwinkel 45 Grad (horizontal tilt angle in Hamburg, Germany (53°N): the optimal tilt angle is close to 30°.
  At 45° tilt, the energy yield is stil very close to the maximum.
  This wide range of acceptable tilt angles makes roof installations attractive in higher latitudes
- Dachausrichtung: Hausdachfirst 57 Grad von Ost = X, also Azimuth + 57 Grad;
  Balkondachfirst 327 Grad, also Azimuth -33 Grad (surface azimuth = angle from South to roof normal projected onto horizontal surface)
- 100 Watts requires ca. 0.7 qm solar panels
- [3D sun path](http://andrewmarsh.com/apps/staging/sunpath3d.html)
  by [Andrew Marsh](http://andrewmarsh.com),
  explained in [sky distribution](http://performativedesign.com/articles/2019/sky-distribution)
- [mashup](https://revisionarch.com/solargoogle-maps-mashup), but prefer Revit
- [Neigung und Ausrichtung](https://www.pv-ertrag.com/neigung-und-ausrichtung)
- [Photovoltaic Geographical Information System Monthly Irradiation Data](https://re.jrc.ec.europa.eu/pvg_tools/en/#MR)

Sonnengang am Carl-Keller-Weg: unsere Nachbarin gegenueber Waldrain, teilt mit:
Im Carl-Keller-Weg 3 scheint die Sonne von ca. 11 Uhr bis 11.30 Uhr (je nach Jahreszeit) durch und über den Waldrain, macht während des Tages ihren Gang, hat an Hochsommertagen von ca. 14 bis 14.30 Uhr an ihren Höhepunkt bis ca. 18 Uhr.
Das heisst, sie gibt so viel Wärme, dass ich dann auf meine Terrasse Waldrain gehe und dort das hervorragende, ja herausragende, ja fantastische Waldrain-Feeling total geniesse...
Gegen 18 Uhr gehe ich dann auf meine Sonnenrain-Terrasse und geniesse den Abend bis in die Puppen...

Frage: Was fuer ein Winkel und Ausrichtung ist fuer eine PV-Anlage optimal?

Antwort: Ca. 45° bringt den höchsten Jahresertrag.
Wenn das Ganze in Richtung Autarkie optimiert werden soll, bringt eine Ost-West-Ausrichtung oder Süd-Ost / Süd-West einen gleichmässigeren Tagesertrag.
Das kann aber auch eine Batterie ausgleichen.
Für mehr Ertrag im Winter: steiler; dann wird dafuer im Sommer wird weniger Strom produziert und ins Netz gespeist.

### Roof Surfaces

Analysis of potential pv panel placement roof surfaces in H30.

- E: east facing roof ridge &ndash; 57 degrees east + 33 degrees south, 45 degree angle from horizontal
- S: south facing balcony roof &ndash; 57 degrees south + 33 degrees west, ca. 40 degree angle from horizontal
- V: vertical facing flat roof &ndash; 57 degrees north + 33 degrees east, ca. 10 degree angle from horizontal
- W: south facing walmdach &ndash; 57 degrees south + 33 degrees west, 45 degree angle from horizontal

The moniwonig PV system uses the first three E, S and V.

Remaining surfaces available:

- E top: east facing roof ridge rectangles above DGN windows: H 2.6, B1 3.7, B2 6.3, area 9.62 + 16.38 = 26 qm
- E bottom: east facing roof ridge rectangles between DGN windows: H 2, B1 0.7, B2 2.8, B3 2.4, area 1.4 + 5.6 + 4.8 = 11.8 qm
- S: south facing balcony roof: 2.7 x 1.3 = 3.5 qm
- W: south facing walmdach rectangle below window: 4.2 x 1.5 = 6.3 qm

We have 40 Wuerth panels 0.6 x 1.2 each, 29.2 qm total.
That would fit into E top + bottom.
Top fits them in vertical pairs of 2 with a total height of 2.4, 6 + 10 wide = 3.6 + 6 meters.
Or, equivalently, in vertical strings of 4 with a total height of 2.4, 3 + 5.
That provides space for 32 panels out of 40.

In E bottom, we can place them in two groups of four each horizontally between the three windows,
1.2 meters high and 2.4 wide, taking care of the 8 but leaving no space for movement.
Or, we add three higher up and further right, upright beside each other below the north chimney.
Or, just two below the north window, tilted up from the roof and facing due south.

Better: add seven to the left of the roof division line, and one just right of it, cf.
the [NE roof pv panel arrangement sketch](/doc/pv/2022-07-23_pv_panel_arrangement_roof_ne.jpg).

With the 40 panels on the NE roof, we have 3 kWp, Dachausrichtung -56 degrees (0 = S, -90 = E), Neigungswinkel 45 degrees.
According to [echtsolar.de PV-Ertragsrechner](https://echtsolar.de/photovoltaik-rechner/ertrag),
the yearly yield will be 2712 kWh with only 73 and 76 kWh per month in december and janaury, respectively, over 2.3 kWh per day.

Comparing with the EGM + EGN consumption: in 2021, it was 1480 kWh for the entire year, ca. 4 kWh per day.

Scaling up the [moniwonig yield](#moniwonig-2022-07-22) from the existing E panels' 400 Wp to the new panels' 3 kWp, we may be able to achieve a factor 3/0.4 = 7.5 higher value; the minimum of 0.3 kWh/d converts to 2.25 kWh/d, pretty precisely matching the theoretical 2.3 kWh/d calculated above.

## Solar Panels

Current sets of PV panels and directions:

- [East](#east) 400 Wp &ndash; E &ndash; roof ridge facing east: 4 x 100 W in series &rarr; max 5.56 A, max 88.8 V, max 400 W, 149 W/qm
- [South](#south) 400 Wp &ndash; S &ndash; balcony roof facing south: 4 x 100 W in series &rarr; max 5.62 A, max 88.4 V, max 400 W, 183 W/qm
- [Vertical](#vertical) 1600 Wp &ndash; V &ndash; flat shed roof facing up: 7 x 2 x 115 W, seven serial pairs in parallel &rarr; max 32.9 A, max 65.6 V, max 1600 W, 111 W/qm
- [Wuerth](#wuerth) 3 kWp &ndash; 40 x 75 W, e.g., 4 strings of ten each &rarr; max 431 V, max 9.6 A at 340 V, max 3200 W, 102 W/qm
- [Trina](#trina) 375 Wp &ndash; 

### South

This is the data sheet for the first four solar panels on the south-facing balcony roof.

Panel data:

- [Solarpanel 100 Watt Polykristallin](https://www.ebay.de/itm/Solarpanel-Solarmodul-100Watt-12V-12Volt-Solarzelle-Solar-Poly-Polykristallin/202982424608)
- Nennleistung Pmax 100 Watt &rarr; 149 W/qm
- Spannung bei Nennleistung Vpmax 17,8 Volt
- Leerlauf Spannung Voc 22,1 Volt
- Kurzschluss Strom Isc 5,92 Ampere
- Strom bei Nennleistung Ipmax 5,62 Ampere
- Temperaturbereich -40°C / +  85°C
- Toleranz + /-5 %
- Solarzellen Polykristallin
- By-Pass Diode 12 Ampere
- Abmessungen 1000 x 669 x 30 mm (4 x 669 = 2676) &rarr; 0.67 qm &rarr; 149 W/qm
- Gewicht 8,1 kg
- Sicherheitsglas 3,2 mm

Array configuration: all four in series &rarr; max 5.62 A, max 88.4 V, max 400 W

### East

Second set of four panels in series along the east-facing roof ridge:

Panel data:

- Herstellernummer: YS100P-36_1er
- Max. Leistung: 100 W &rarr; 183 W/qm
- Max. Versorgungsspannung: 18 V
- Max. Leistungsstrom: 5.56 A
- Leerlaufspannung: 22.2 V
- Kurzschlussstrom: 5.89 A
- Abmessungen: 101 x 54 x 3 cm &rarr; 0.55 qm
- Gewicht: 6.3 kg
- Zellwirkungsgrad: 17.5 %
- Solartechnik: Polykristallin
- Marke: Yangtze Solar

Array configuration: all 4 in series &rarr; max 5.56 A, max 88.8 V, max 400 W

### Vertical

Horizontal shed roof with seven pairs of cbl used panels [Shell S115](/doc/pv/2021-10-22_pv_panel_co.jpg) facing
vertically and slightly north with some shade.
Later: tilted them slightly southwards with a brick each.

Panel specs: peak power 115 Wp, peak power voltage 26.8 V, open circuit voltage 32.8 V, short circuit current 4.7 A, 850 x 1218 mm &rarr; 1.03 qm &rarr; 111 W/qm

Array configuration: 7 pairs of 2 panels in series each &rarr; max 32.9 A, max 65.6 V, max 1600 W; due to the shading, they will never reach that peak performance.

### Wuerth

40 Stück 75W Würth Dünnschicht PV Solarmodule [WSG0036M075](/doc/pv/2022-06-10_pv_panel_wuerth.jpg):

- 1205 x 605 x 6 mm &rarr; 0.73 qm, total 29.16 qm
- Pmax 75 W &rarr; 102 W/qm
- Isc 2.4 A
- Vmp 34 V
- Voc 43.1 V
- Max system voltage 1000 V
- Wpeak total 3 kW

### Mounting and Connecting Solar Panels

- [PV Halterung Module, Montagesystem](https://www.ebay.de/itm/PV-Halterung-Module-Montage-Solarbefestigung-Dachhaken-Stockschrauben-bis-4-2m/192890852205)  for mounting the four panels on the balcony roof
from [Diether](file:///UsersUsers/jta/j/doc/house/huenerberg/gottschalk/2021-04-08_diether_pv_montage_rechnung.pdf)
- [Second set of rails from bau-tech Solarenergie GmbH](file:///UsersUsers/jta/j/doc/house/huenerberg/gottschalk/2021-06-30_bautechsolar_montage.pdf) for
mounting the four panels for  along the east-facing roof ridge
- [Profiness GmbH](https://www.profiness.de), Broicher Waldweg 42, 45478 Mülheim a.d. Ruhr, Tel + 49-208/309619-0, info@profiness-shop.de
- [Soldering Solar Connectors](https://youtu.be/NMwMIkyfIu8)

### Cables

To select a suitable wire size, please refer to
the [cable table](/doc/pv/cable_wire_size_gauge_chart.pdf).

I bought wire from [zaehlerschrank24.de](https://www.zaehlerschrank24.de).

My rooftop panels are connected with 6 mm2 solid copper wire:

- East: 400 Wp, 4 x 18 = 72 V, 5.56 A
- South: 400 Wp, 4 x 17.8 = 71.2 V, 5.62 A

Up to 10 meters length and 40 A corrent, a 6 mm2 wire is enough.

I bought 100 m of 6mm2 'xenes' cable from lichtex and asked them the details; they reply:
Hartgezogenes Kupfer, verzinnt. Mehrdrähtiger Leiter, Klasse 5 IEC60228;
bei 20 °C betraegt der Winderstand R pro Meter fuer 4mm² ca. 5.1 × 10-3 Ohm, fuer 6mm² ca. 3.2 × 10-3 Ohm.

On the flat roof, placed seven pairs of cbl used panels:

- 230 Wp, 2 x 30 = 60 V, 4.7 A

Since 7 x 4.7 = 32.9 < 4 A, the 6mm2 wire should suffice for all seven pairs.

### Measuring Charger and Inverter DC Currents

The battery, chargers and inverter will generate the following maximum currents:

- B and I: max 2500 W &rarr; max ca. 100 A
- E: [EPEver Tracer 3210AN](#epever-tracer-3210an) max 400 W from PV &rarr; max 16.7 A
- S: [Renogy Rover 20A](#renogy-rover-20a) max 400 W from PV &rarr; max 16.7 A
- V: [Renogy Rover 40A](#renogy-rover-40a) max 1040 W from charger &rarr; max 43.4 A

Cables from the charge controllers to the battery and inverter:
[resistance calculator](http://shelvin.de/kupfer-leiter-widerstand-berechnen/) says R = ca. 0.001 ohn.
With a 10 A current, that should generate a voltage differential of ca. 0.01 V or 10 mV.

Using a INA121 instrumentation amplifier with a gain of 100 to monitor that would map the interval [0,20A] to [0,1V].
It supports gains between 1 and 10000.

[Using Arduino Uno to measure voltage](https://www.best-microcontroller-projects.com/arduino-adc.html),
we have six ADC input pins (A0-A5); a multiplexer feeds one of the six into the ADC.
The standard setup measures voltages between 0V and 5V with a resolution of 4.9mV.

Todo: measure the precise resistance of the five individual pieces of cable.

### Blocking and By-Pass Diodes

- [solar-facts: Blocking and by-pass diodes in solar panels](https://www.solar-facts.com/panels/panel-diodes.php)
- [couleenergy: Blocking and bypass diodes in solar panels and solar PV systems](https://couleenergy.com/bypass-diodes-in-solar-panels)

cbl used panels include three diodes each, type IR50SQ100 or 50SQ100, Vishay Semiconductors Schottky Diodes & Rectifiers 100V 5A Schottky DO-204AR.
Are two of them blocking and one the bypass?
If not, then we may need to add blocking diodes before hooking up all our pairs in parallel.

Nope, testing revealed that they are all three by-pass diodes, for the three strings of cells integrated in each panel.
Applying a voltage across the poles of an unlighted panel sends current through it 'backwards'.
So, I added my own blocking diodes.

I bought Master Instrument (MIC) SR5100 Schottky diodes
([datasheet](https://micindia.com/productSearch.jsp?index=5&prodCat=&prodSubCat1=&prodSubCat2=&partNo=SR510)).
Unfortunately, they have a forward voltage drop of 0.85 V, so we loose 4.7 A x 0.85 V = 4 W of peak power from each pair of panels.
Ah, I see now how the type is encoded: SR5100 stands for SR-5-100, a Schottky rectifier with a rating of 5 A and 100 V.

### Semitransparent

Frage zu 50% halbtransparente lichtdurchlaessige PV-elemente, die Strom erzeugen und auch Licht durchlassen:
Die koennte man ja eventuell aufs Dach machen, und auch als Fenster benutzen, oder?

Antwort: Als Dach oder Fenster wäre der Dämmwert zu schlecht, aber z.B. als Dach eines Wintergartens o.ä.
Vielleicht auch fuer Dachausbau, z.b. einen unbeheizten hellen Bewegungs- und stillen Raum oben unter dem Sueddach.

## Charge Controller

- E: [EPEver Tracer 3210AN](#epever-tracer-3210an) max 400 W from PV &rarr; max 16.7 A
- S: [Renogy Rover 20A](#renogy-rover-20a) max 400 W from PV &rarr; max 16.7 A
- V: [Renogy Rover 40A](#renogy-rover-40a) max 1040 W from charger &rarr; max 43.4 A

Illuminating YouTube videos on charging:

- [Battery charge voltages explained: equalization, bulk, absorption and float](https://youtu.be/87rxYyTZgbE)
- [Float charging Lithium batteries](https://youtu.be/6vTaCkTVl7I)
    - No equalisation
    - Set absorbtion equal to float, e.g., to 13.4 V for 80% SOC
- [LiFePo4 and absorption](https://youtu.be/1ldD8Hyradk): charge with constant current until a certain voltage is reached, e.g., 3.55 V, then switch to constant voltage and continue until the current drops down, e.g., to a small percentage of the maximum battery amperage.
- [Cell balancing](https://roamlab.com/cell-balancing)

### Otto

Otto got his charger
from [offgridtec](https://www.offgridtec.com/offgridtec-pwm-pro-laderegler-12v-24v-30a-usb.html?c=741);
Kundenberatung + 49-8721/7786187 (Mo - Do 08 - 12 und 13 - 18 Uhr, Fr 08 - 14 Uhr).
He uses
a [https://www.amazon.de/FCONEGY-Balance-Ladeger%C3%A4t-LCD-Balance-Ladeger%C3%A4t-Adapter/dp/B07TMYCV8R](FCONEGY iMAX B6 Balance Charger 80W 6A) to
charge all kinds of different battery types.

### EPEver Tracer 3210AN

I am currently using the EPEver Tracer 3210AN.

- 3 &rarr; charge and discharge current 30A
- 2 &rarr; 24V system
- 10 &rarr; 100V max PV open circuit voltage
- AN &rarr; common negative system

- [Online manual](https://www.epsolarpv.com/upload/cert/file/1811/Tracer-AN-SMS-EL-V1.0.pdf)/[local link](file:///Users/jta/j/doc/hardware/manual/epever_tracer_3210an/epever_tracer_an_manual.pdf)
- [Struggling with basic LiFePO4 settings in Epever Tracer](https://diysolarforum.com/threads/struggling-with-basic-lifepo4-settings-in-epever-tracer.17785)

Some measured data on solar irradiation on balcony roof:

- 2021-06-25 13.1 V before a full day of sunshine.
- 2021-06-26 13.7 V after a full day of sunshine the day before.
  At 12:10 full sunshine, but still 0.0 A.
  At 16:50 still 13.7 V and 0 A.
  Apparently, the charges stops charging the battery at 13.7 V.
  
&rarr; Need to modify the charger control settings!

- [How to use the EPEver PC software for charge controllers](https://www.diyrenewable.com/blog/post/how-to-use-the-epever-pc-software-for-charge-controllers)
- Configure epever tracer settings: 
  CC-USB zu RS-485 Konverter, SolarV GmbH, tel + 4961969076877, info@solarv.de, tel China + 86-10-82894112, info@epever.com

Here are my initial EPever Tracer 3210AN solar charger settings for
the [east](doc/pv/charger/2021-08-30_tracer_batt_param_east.jpg)
and [south](doc/pv/charger/2021-08-30_tracer_batt_param_south.jpg) facing panels on August 30.

Settings recommended in the discussion
on [struggling with basic LiFePO4 settings in Epever Tracer](https://diysolarforum.com/threads/struggling-with-basic-lifepo4-settings-in-epever-tracer.17785),
adapted for 24 V:

- Over Voltage Disconnect 29.4 V
- Charging Limit Voltage 29.2 V
- Over Voltage Reconnect 29.2 V
- Equalize Charging Voltage shut off or 28.8 V
- Boost Charging Voltage 29.2 V
- Float Charging Voltage 27.2 V
- Boost Reconnect 26.6 V
- Low Voltage Reconnect 20 V
- Under Voltage Warning Reconnect Voltage 23 V
- Under Voltage Warning 23 V
- Low Voltage Disconnect 22 V
- Discharging Limit Voltage 21 V
- Equalize Duration 0 or set as low as possible
- Boost Duration 180 minutes

Lower values are recommended to reduce battery stress, e.g.,
in [Epever controller 90% 20% soc charge parameter Q](https://diysolarforum.com/threads/epever-controller-90-20-soc-charge-perameter-q.23358).
Interesting note from there (adapted for 24 V):

> In practice, if the resting voltage is below 25 V, it's getting low; above a resting of 26.8 V, it's nearly full.

2021-09-03: changed my boost duration from 120 to 180.
Maybe I should lower it to 10 or even 0 instead?

### Tracer RS485 Communication

Links for communicating with and controlling the EPEver Tracer:

- [Python code and RS485 protocol RJ45 connector cable pins for communicatiing with EPEver Tracer 3210AN](https://stackoverflow.com/questions/64251163/cant-connect-to-epsolar-tracer-3210an-charge-controller-from-windows-10-via-ser)
- [Tracer RS485 Modbus-Blynk](https://github.com/tekk/Tracer-RS485-Modbus-Blynk-V2), an Arduino project to connect the EPEver Tracer MPPT Solar Controller RS-485 Modbus to an ESP8266 and monitor it using the Blynk mobile app
- [Epever RS485 to wifi adaptor](https://www.tindie.com/products/plop211/epever-rs485-to-wifi-adaptor-v15)
- [Wingoneer USB 2.0 to RS485 serial converter adapter CP2104 SN75176](https://www.ebay.de/itm/183714207241)
- [Silabs CP2104 drivers](https://www.silabs.com/search#q=cp2104%20driver%20mac&t=All&sort=relevancy),
[CP210x VCP Mac OSX Driver](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)
- [Arduino Reading Solar Charger COM via MODBUS (MAX485)](https://forum.arduino.cc/t/reading-solar-charger-com-via-modbus-max485-problem/697035)
- [Capture and Analyze Solar Power Generation Metrics with Python and InfluxDB](https://trevorsullivan.net/2020/10/22/capture-and-analyze-solar-power-generation-metrics-with-influxdb)

### Tracer RS485 Cable

RS485 standard:

1. + 5V &ndash; orange +  white
2. + 5V &ndash; orange
3. RS485 B &ndash; green +  white
4. RS485 B &ndash; blue
5. RS485 A &ndash; blue +  white
6. RS485 A &ndash; green
7. GND &ndash; brown +  white
8. GND &ndash; brown

I used the following pins, standard colour coding, my 4-wire cable with red wires and 1, 2 and 4 black stripes, resp.:

- pin 3 &ndash; RS485 B &ndash; green +  white &ndash; red with 1 black stripe
- pin 5 &ndash; RS485 A &ndash; blue +  white &ndash; red with 2 black stripes
- pin 7 &ndash; ground GND &ndash; brown +  white &ndash; red with 4 black stripes

Atached to a chopped off half of a cable marked:

- UTP CAT 5E PATCH ISO/TEC 11801 &amp; EN 50288 &amp; TIA EIA 5E8B.2 3P 24 AWG X4P Type CM (UL) C (UL) CHH E1785589

I guess UTP = unshielded twisted pair; X4P = times four pairs...

With that cable and the MacOS driver for the USB-RS485 adapter,
[jtracer](https://github.com/jeremytammik/jtracer) can
successfully query parameter data from the EPEver Tracer 3210AN.

### Renogy Rover 40A

On 2022-02-04, I installed
a [Rover Li 40 Amp MPPT Solar Charge Controller](https://www.renogy.com/rover-li-40-amp-mppt-solar-charge-controller) for
the horizontal panels:

- Nominal System Voltage: 12/24V Auto-Detect
- Rated Charge Current: 40A
- Max. PV Input Voltage: 100V
- Max. PV Input Power: 12V/520W, 24V/1040W
- Power Consumption: ＜100mA/12V; ＜58mA/24V
- Temperature Compensation: -3mV/°C/2V
- Max Battery Voltage: 32V
- Electrical Protection: Overcharging, over-discharging, overload, short circuit. Capable of charging over-discharged lithium batteries.

### Renogy Rover 20A

On 2022-03-10, I installed
a [Rover Li 20 Amp MPPT Solar Charge Controller](https://www.renogy.com/rover-li-20-amp-mppt-solar-charge-controller) for
the south-facing panels:

- Nominal System Voltage: 12/24V Auto-Detect
- Rated Charge Current: 20A
- Max. PV Input Voltage: 100V
- Max. PV Input Power: 12V/260W, 24V/520W
- Power Consumption: ＜100mA/12V; ＜58mA/24V
- Temperature Compensation: -3mV/°C/2V
- Max Battery Voltage: 32V
- Electrical Protection: Overcharging, over-discharging, overload, short circuit. Capable of charging over-discharged lithium batteries.

Warranty registration:

- Purchase Date: 10.03.2022
- Product Category: controller
- SKU with Country Code: RNG-CTRL-RVR20-DE
- Serial Number: 205231800178
- Ebay Order Number: 373691158278

### Arduino Charger

- [1kW Arduino MPPT Solar Charge Controller (ESP32 +  WiFi)](https://www.instructables.com/DIY-1kW-MPPT-Solar-Charge-Controller)

## Batteries

Must read [how to find happiness with LiFePO4 batteries](https://www.solacity.com/how-to-keep-lifepo4-lithium-ion-batteries-happy);
LiFePO4 charge settings cheat sheet, translated from 12 to 24 V:

- Bulk/Absorb: 28.4 - 29.2 Volt
- Absorb time: 0 - 2 hours
- Float: 27.2 Volt or less
- No temperature compensation
- No equalize, or 29.2 Volt

Chart of voltage vs capacity for a 3V LiFePO4 cell and a 24V LiFePO4 battery combined from the article (above) and the graph (below), latter marked with an apostrophe ':

<center>
<table>
<tr><td colspan="2">V</td><td>%</td></tr>
<tr><td>3.650</td><td>29.2</td><td>100'-100 (charging)</td></tr>
<tr><td>3.450</td><td>27.6</td><td>99.5'</td></tr>
<tr><td>3.400</td><td>27.2</td><td>100 (resting)</td></tr>
<tr><td>3.375</td><td>27.0</td><td>99'</td></tr>
<tr><td>3.363</td><td>26.9</td><td>96'</td></tr>
<tr><td>3.350</td><td>26.8</td><td>90'-99</td></tr>
<tr><td>3.325</td><td>26.6</td><td>80'-90</td></tr>
<tr><td>3.313</td><td>26.5</td><td>65'-70</td></tr>
<tr><td>3.300</td><td>26.4</td><td>60'-70</td></tr>
<tr><td>3.288</td><td>26.3</td><td>55-55'</td></tr>
<tr><td>3.275</td><td>26.2</td><td>40-50'</td></tr>
<tr><td>3.263</td><td>26.1</td><td>40'</td></tr>
<tr><td>3.250</td><td>26.0</td><td>30-30'</td></tr>
<tr><td>3.225</td><td>25.8</td><td>20-25'</td></tr>
<tr><td>3.200</td><td>25.6</td><td>17-20'</td></tr>
<tr><td>3.150</td><td>25.2</td><td>14'</td></tr>
<tr><td>3.125</td><td>25.0</td><td>14</td></tr>
<tr><td>3.000</td><td>24.0</td><td>9-9.5'</td></tr>
<tr><td>2.800</td><td>22.4</td><td>5'</td></tr>
<tr><td>2.500</td><td>20.0</td><td>0-0'</td></tr>
</table>
</center>

<img src="/doc/pv/lfp_voltage_charging.png" alt="LiFePo4 voltage charging" title="LiFePo4 voltage charging" width="100%"/>

<img src="/doc/pv/lfp_voltage_discharging.png" alt="LiFePo4 voltage discharging" title="LiFePo4 voltage discharging" width="100%"/>

<!-- <img src="/doc/pv/lfp_voltage_chart.jpg" alt="LiFePo4 voltage chart" title="LiFePo4 voltage chart"/> -->

My battery specs:

- 24 V system: 25.6 V battery, max charge 29.2V, min discharge 20V
  &ndash; 8 cells VariCore 3.2 V 200Ah 3C LiFePO4, 3.82 kg, 200 x 172 x 53 mm, working voltage 2.5-3.65 V
  &ndash; [specification](doc/pv/battery_varicore_lifepo4_spec.jpg)
- 48 V system: 16 x EVE LF280K 280Ah 3.2V LiFePO4 prismatic battery cells
  by [Docan Power](https://www.docanpower.com),
  [specification](/doc/pv/docan_power_battery_cell_lf280k_specs.pdf);
  standard chanrge and discharge is 0.5C, i.e., 140A for EVE 280Ahl
  1C is 280A; the peak current is 2C, 560A.

<!--

EVE LF280K 280Ah 3.2V LiFePO4 Prismatic Battery Cell Laser Welded Terminal Stud	280K	16	$110.00	$1,760.00

HK BOLANG INDUSTRIAL CO. LIMITED, Baoshan Industry
23.03.22 Park, Minfu Road, Minzhi, Longhua New District, Shenzhen, T 3530.23.30 Compte Privé 60+ VTK18143 Exécuté 2'227.20 USD
Guangdong, China

Jeremy Tammik, Binningen, Switzerland
Ship to Loerrach, Germany
Avis de paiement pour la banque
Standard Chartered Bank Hong Kong Acc 57411432645 Swift SCBLHKHHXXX Bank Code 003; Beneficiary HK BOLANG INDUSTRIAL CO. LIMITED

2'227.20 USD paid from BCN
Order ID: #1781
Date Added: 21/03/2022
Payment Method: Bank Transfer from BCN
Shipping Method: Sea Shipping From China Warehouse

-->

Other batteries:

- cbl old [12V 100Ah 100A 1200W power GTK lithium lifepo4 battery BMS 4S 12,8 V](https://de.aliexpress.com/item/33048551880.html?spm=a2g0s.9042311.0.0.16544c4di1iNDJ): 
Betriebsspannung 10-14.6 V, Überladungsschutzspannung 14.6 V +  0.05 V, Entladungsschutzspannung 10V +  0.05 V
- cbl new: [4 x VariCore 3.2 V 280Ah](https://de.aliexpress.com/item/1005001563505796.html) +  [LiIon batterey management system](https://de.aliexpress.com/item/4000837336363.html)
- Otto's old battery: [12 V YellowTop 75 Ah](https://www.autobatterienbilliger.de/Optima-YT-S-5-5-YellowTop) (ca. 0.9 kWh) max charge 14.8 V, six cells, min 1.8 V x 6 = 10.8
- Q&amp;A on [solar panel short circuit](https://electronics.stackexchange.com/questions/18092/solar-panel-short-circuit)
- [DIY: 11kWh Batterie für die Solaranlage & das richtig günstig](https://youtu.be/8tGZIi055qI)

<!--

What battery is this?
Solarbatterie 12V 280Ah EXAKT DCS Wohnmobil Versorgung Boot Batterie statt 230Ah
+ + VERSCHLOSSENE ZYKLENFESTE DEEP CYCLE SOLARBATTERIE+ + 
Brandneu
5.0 von 5 Sternen.
1 Produktbewertung- Solarbatterie 12V 280Ah EXAKT DCS Wohnmobil Versorgung Boot Batterie statt 230Ah
EUR 254,90
BIG Solarbatterie 12V 200Ah Versorgung Notstrom Windkraft Batterie statt 180Ah
Brandneu
EUR 208,90

-->

### Hydropower

A possible alternative to using batteries for storing electrical energy might be storing and recuperating it 
with [energy from hydro-power](https://www.engineeringtoolbox.com/hydropower-d_1359.html) instead:

The theoretical potential energy in a volume of elevated water can be calculated

```
W = m g h
  = ρ V g h                      (3)
```

where

```
W = energy (J)
m = mass of water (kg)
V = volume of water (m3)
```

Example &ndash; Energy in Elevated Water Volume

10 m3 volume of water is elevated 10 m above the turbine.
The potential energy in the water volume can be calculated as

```
W = (1000 kg/m3) (10 m3) (9.81 m/s2) (10 m)
  = 981000 J (Ws)
  = 981 kJ (kWs)
  = 0.27 kWh
```

20 m3 with 20 m height difference:

```
W = (1000 kg/m3) (20 m3) (9.81 m/s2) (20 m)
  = 3924000 J (Ws)
  = 3924 kJ (kWs)
  = 1.08 kWh
```

That is a large volume of water for a relatively small amount of electrical energy.
I guess we will stick with batteries after all.

## BMS Battery Management System

I first tried a Daly Smart BMS. 
Initially, I could not get that to work.
I then switched to ther i-tecc BMS, but that did not balance the cells, and switched off when they consequently got unbalanced.
I tried to add the heltec active balancer in parallel with the i-tecc BMS, but that die not help.
The second time around, I got the Daly Smart BMS to work after all.
It is now performing flawlessly.

### Daly Smart BMS

- AliExpress SouthLan Store for 87 euro: Smart BMS 8S LiFePo4 24V 100A.
- [Manuals](file:///UsersUsers/jta/j/doc/hardware/manual/daly_bms/)

<!--

- daly bms
  https://diysolarforum.com/threads/daly-24v-8s-initiation-and-software.18644/
  /Users/jta/downloads/DalyBmsMonitorV1.1.5.zip https://dalyelec.en.made-in-china.com/product/bFrtpnBKCQhw/China-House-Hold-Energy-Use-Top-Quality-Daly-24V-150A-LiFePO4-BMS-8s-Common-Port-with-Uart.html
  https://diysolarforum.com/threads/how-to-turn-on-daly-smart-bms-without-lightboard.20230/
  https://youtu.be/qb1I8WrQvJM
  for ON switch, bridge pin 5 and 6 on lightboard plug -- https://youtu.be/oTYwy9uIbgc
  the sleeptime 15300 should permanently prevent the BMS from falling asleep.
  the sleeptime must be set to 65535 to permanently prevent it from sleeping.
  Android app alarm list:
  AFE collect chip err
  EEPROM err
  Windows software alarm list:
  AFE acquisition chip fault

- return daly bms back to china
  Address: 38 Longxiang Road, Niansanli Street, Yiwu City, Jinhua City, Zhejiang Province, China
  To: Du Zhenyu
  Telephone: 15888900391
  Zip code: 322000

Aliexpress order data:
Order ID: 8135309523119513 View Detail
Order time: 03:12 Jul. 15 2021
Store name: SouthLan Store
Store URL: https://www.aliexpress.com/store/910335186?spm=a2g0s.9042311.0.0.688f4c4d4wxGun
Order amount: € 87,52
Smart BMS 4S LiFePo4 12V 24V 36V 48V 30A~500A Li-Ion LTO 3S 7S 8S 10S 12S 13S 16S 24S bms balance board bluetooth APP for solar
Product properties: 100A +  LiFePo4 8S 24V BT

Aliexpress conversation:
15/07 12:13
Order information
Wenn Sie Ihre Bestelldaten ändern möchten, hinterlassen Sie dem Verkäufer eine Nachricht. Ihre Wünsche sind unverbindlich – aber der Verkäufer wird sein Bestes tun, um Ihre Bedürfnisse zu erfüllen.
Bestellnummer:
8135309523119513
Menge: 1
Insgesamt: € 86,52
Name Monika Heller
Telefonnummer (+ 49)76215797331
Adresse Hünerbergweg 30, , Lörrach, Other, Germany, 79539
16/08 12:04
Order Number #8135309523119513
Smart BMS 4S LiFePo4 12V 24V 36V 48V 30A~500A Li-Ion LTO 3S 7S 8S 10S 12S 13S 16S 24S bms balance board bluetooth APP for solar
Completed € 86,52
16/08 12:33
hello
Hello
16/08 12:41
Order Number #8135309523119513
Smart BMS 4S LiFePo4 12V 24V 36V 48V 30A~500A Li-Ion LTO 3S 7S 8S 10S 12S 13S 16S 24S bms balance board bluetooth APP for solar
Completed
€ 86,52
The sampling cable provided is incorrect and the entire device cannot be used as delivered. The BMS is for 8 cells, so the sampling cable requires 9 wires. The cable supplied has only 8 wires, and the connector does not fit into the connecting slot.
16/08 13:00
我发一根新电缆可以吗
I send a new cable
ok？
OK?
Alibaba Translation
19/08 16:55
did you send it by fast direct mail postage? how long will it take to reach me? i cannot wait for another month or two. a simple letter should be must faster, shouldn't it?
20/08 02:16
Hello, we choose fast logistics, which usually takes 15-20 days
UG142343300YP
This is the new logistics tracking number
24/08 17:01
The BMS still does not work. I analysed it with both the Android and the Windows desktop apps. On Android, the error message says:
AFE collect chip err
EEPROM err
The Windows app alarm list says "AFE acquisition chip fault"
I would like to return this BMS to you for a full refund, since it seems unusable to me.
25/08 02:48
Hello, did you follow the instructions  ？
By the way, did you link the BMS to the computer?
29/08 09:13
yes, i followed the instructions exactly.
yes, i linked the BMS to the computer.
i spent two days trying to get it to work and cannot get the errors fixed.
i have now purchased a new BMS from a European vendor and will use that instead.
please provide instructions on how to return the BMS to you for a full refund. 
thank you.
29/08 10:16
Hello, did you plug in the NTC when you used it
30/08 19:28
yes, i plugged in the NTC.
i have now bought an installed an alternative BMS that works.
it is a lot more expensive than your product, and has much less features, but it does the job:
https://www.i-tecc.de/shop/bmspcm/bms-lifepo4/8s-24v/511/bms-lifepo-8s-150a-24v?c=9
now my system is up and running with the new BMS and I would like to return your BMS to you for a full refund.
what address should i send it to?
31/08 03:42
Address: 38 Longxiang Road, Niansanli Street, Yiwu City, Jinhua City, Zhejiang Province, China
To: Du Zhenyu
Telephone: 15888900391
Zip code: 322000

Address: 38 Longxiang Road, Niansanli Street, Yiwu City, Jinhua City, Zhejiang Province, China
To: Du Zhenyu
Telephone: 15888900391
Zip code: 322000
24/09 11:39

Order Number #8135309523119513
Smart BMS 4S LiFePo4 12V 24V 36V 48V 30A~500A Li-Ion LTO 3S 7S 8S 10S 12S 13S 16S 24S bms balance board bluetooth APP for solar
Completed
€ 86,52
Lesen
25/09 04:13

hello
28/09 11:06

hello you too
Lesen
26/10 09:35

Order Number #8135309523119513
Smart BMS 4S LiFePo4 12V 24V 36V 48V 30A~500A Li-Ion LTO 3S 7S 8S 10S 12S 13S 16S 24S bms balance board bluetooth APP for solar
Completed
€ 86,52
Lesen

hello

Order Number #8135309523119513
Smart BMS 4S LiFePo4 12V 24V 36V 48V 30A~500A Li-Ion LTO 3S 7S 8S 10S 12S 13S 16S 24S bms balance board bluetooth APP for solar
Completed
€ 86,52
Lesen
26/10 09:56

Hello. We returned the BMS to you one month ago. Can you confirm that you have received it, please?
Lesen
27/10 05:14

Hello, could you please give me the tracking number
09/11 14:06

Lesen
my son cbl sent it with no tracking number. the package contains the bms together with all the accessories plus the additional cable; originally, you supplied an 8-pin cable that is unusable, later a 9-pin one as well. the package includes both.
Lesen
10/11 08:19

Hello, do you mean that the cable of the second time is also wrong
12/11 20:52

no, the second cable seemed fine, but i could still not get the charger to work. i described the problems above on august 24, 29 and 30. i was unable to resolve them, unfortunately, and the charger never started.
Lesen
14/11 06:43

You need to power it up, follow the instructions
16/11 18:38

i have returned the charger to you and am asking you to refund me the price i paid. i was unable to get the charger toi work, even following your instructions to the letter. i described the problem to you in august and returned the charger to you more than a month ago. can you please refund the money now? thank you!
Lesen
17/11 03:43

Can you apply for a refund
19/11 19:14

yes, please. i herewith apply for a refund. what more do i need to do to achieve this?
Lesen
20/11 06:43

Yes, please apply for a refund
22/11 17:20

How do I apply for a refund? 
Lesen
23/11 07:57

Hello, the package may be lost, I extend the protection period to send a new one, ok
25/11 18:29

-->

### i-tecc BMS

I then switched to a more expensive 200 euro non-smart German 
[BMS LiFePO 8S 150A 24V](https://www.i-tecc.de/shop/bmspcm/bms-lifepo4/8s-24v/511/bms-lifepo-8s-150a-24v)
by [i-tecc](https://www.i-tecc.de):

- Nennspannung: 25.6V (24V)
- Ladespannung: 28.8V (8 &middot; 3.6V)
- Überspannungsschutz: 3.9V ± 0.025V (8 &middot; 3.9 = 31.2); Freigabe 3.8 V (30.4 V)
- Tiefentlade-/Unterspannungsschtz: Aktivierung 2.1V, Freigabe 2.3V
- Ladestrom max.: 150A
- Entladestrom: 150A
- Balance-Strom: 110mA ± 10mA
- Überlastschutz: 500A
- Eigenverbrauch: ≤20µA je Zelle
- Temperaturüberwachung: ja
- [Detailed specification](doc/pv/itecc_bms_lifepo_8s_150a_24v.pdf)

That worked fine right out of the box.
However, there is no way to monitor it or read any data from it.
Futhermore, it does nothing at all to balance the cells until the battery voltage reaches 28.8 V.
I was only able to find that out by calling and asking.

Maybe it does do some balancing after all, however;
on 2021-10-30, the bms turned off due to cell imbalance and cell #2 going below its minimum;
ever since, they seem to be doing quite well, even though cell #2 keeps lagging behind the others;
2021-12-16, after months of use and never reaching 28 V, they appear to be almost perfectly balanced.

<!--

- itecc 05181/8518290:
kann man vom BMS auslesen, ob er laeuft und in welchem zustand er sich befindet?
kann man die spannungen der einzelnen zellen vom BMS erfragen?
was passiert, wenn eine zelle 3.9 V erreicht und die ladebegrenzung ausgeloest wird?
wie bringt man diese zelle wieder auf 3.8 runter, zur freigabe?
was passiert, wenn eine zelle 2.1 V unterwchreitet und der tiefentladeschutz eintritt?
wie bringt man diese zelle wieder auf 2.3 hoch, zur freigabe?
batterie nur via BMS ansprechen, sowohl laden als auch verbraucher?
wie kann sie sich ausschalten und nach zwei stunden wieeder einschalten?
/Users/jta/j/tmp/bms_itecc_video/

- 2022-02-16: return i-tecc bms
Ich habe bei Ihnen einen BMS LiFePO 8S 150A (24V) fuer euro 198 gekauft. Ich habe gleich von Anfang an Schwierigkeiten damit gehabt, weil er die Zellen nicht aktiv ausbalanziert hat. Ich habe mit Ihnen mehrfach das Problem angesprochen. Leider wurde keine Loesung gefunden. Mir wurde mitgeteilt, dass die BMS erst ab einer Batteriespannung von 28.8 V balanzieren kann. Diese Spannung wurde aber nie erreicht und konnte auch nicht erreicht werden, weil die Zellen vorher ausser Balance gerieten und die BMS daher gesperrt hat. Ich habe probiert, einen zusaetzlichen aktiven Balancer parallel zur BMS zu schalten. Das hat auch nicht geholfen. Jetzt habe ich mich fuer eine andere Loesung entschieden und moechte die BMS wieder zurueckgeben. Wie soll ich da vorgehen? Vielen Dank im Voraus. Mit freundlichen Gruessen, Jeremy Tammik.

- 2022-02-17: tel tel 05181/8518290 frau petersen: send bms, they'll take a look

- 2022-02-18: tel 05181/8518290 frau petersen: bms is in the post

-->

## Balancer

A discussion on using
an [active balancer with Daly BMS](https://diysolarforum.com/threads/active-balancer-with-daly-bms-51-2v-280ah-pack.15565) explains
the cell quality and the concepts and uses of active versus passive balancing.
If you stay in the middle (flat) part of the voltage curve and avoid discharging below the knee at ca. 15% SOC, the BMS passive balancer should be able to handle the cell balancing with no need for an additional active balancer.

### Heltec Active Balancer

The i-tecc BMS does not start actively balancing until the battery reaches 28.8 V, i.e., 3.51 V per cell.
Unfortunately, that has never happened yet.
I therefore purchased an additional 55 euro active LTO/LiFePo4/NCM balancer by [Heltec BMS](https://heltec-bms.com)
providing [8S 5A capacitive active equalization](https://heltec-bms.com/project/5a-capacitive-active-equalization-active-balancer) from
[LTO-Store](mailto:info@LTO-Store.de), Andreas Petermann, Neuffen, tel. + 49-1520/8767231:

> Capacitive active energy transfer equalization board (high precision 5mv, whole set of equalization, not adjacent equalization)
Working voltage 2.7V-4.5V, suitable for ternary lithium, lithium iron phosphate, lithium titanate.
Working principle: the capacitor fit transfers the charge carrier, and the balancing work is started when the balancing board is connected to the battery.
The original brand new ultra-low internal resistance MOS, 2OZ copper thick PCB, balancing current 0-5.5A, the more the balancing current, the smaller the battery.
Reserve the wiring position of the dormant switch, the operating current in dormant power-off mode is less than 0.1mA, and the equilibrium voltage accuracy is within 5mv.
The quiescent current is about 12 mA; it is recommended that the battery capacity should be suitable for batteries with 60-300Ah.
With under-voltage sleep protection, voltage below 3.0V will automatically stop entering the sleep state; standby power consumption is less than 0.1 mA.
[Specifications](doc/pv/heltec_active_balancer.png)

## Inverter

### Victron Phoenix

I temporarily hooked up an old used Victron Phoenix inverter:
Manual for [Phoenix Inverter Compact 1200 and 1600](file:///UsersUsers/jta/j/doc/hardware/manual/victron_phoenix_inverter/manual_phoenix_inverter_compact_1200_1600.pdf).

Bad news: [Data communication with Victron Energy products](file:///UsersUsers/jta/j/doc/hardware/manual/victron_phoenix_inverter/rs232/technical_information_data_communication_with_victron_energy_products_en.pdf) says that the victron inverter communicates using VE.Bus and nothing else. 
"VE.Bus is our proprietary protocol used by the Inverters to synchronize their AC outputs. There are VE.Bus communication ports on our Inverters, Multi’s and Quattro’s. The synchronization feature is mission-critical. Direct third-party connections are not allowed. All interfacing has to be done via Modbus TCP (preferred), “VE.Bus to CANbus/NMEA2000 interface”, or via the MK2/MK3". To obtain official Modbus TCP requires a victron color control gx device, which costs around eur 500 on ebay. so, i would say, forget it. i see no realistic way to hook up these inverters or communicate with them at all.

Good news: [Connecting your Victron product to a computer with VE Configure](file:///UsersUsers/jta/j/doc/hardware/manual/victron_phoenix_inverter/guide_veconfigure.pdf) says that
VE configure II is a program used to configure settings/options on a Multi or Quattro, connecting your Victron product to a computer and that Phoenix Chargers, Phoenix Multi (including Compact) and larger Phoenix Inverters are all compatible with VE configure. All other models are not. So, maybe it is possible to configure and control the Phoenix after all.

### Easun Power

Easun Power Official Store 
[pure sine wave inverter DC 24V AC 220V 2500W inverter with LED display](https://de.aliexpress.com/item/4000472757961.html)

- Continuous Rated Power: 2500W
- Peak Power: 5000W
- Low voltage protection: 20V
- High voltage protection: 30V
- Conversion rate: 93%
- Eight intelligent protections: overload, high voltage, low voltage, over temperature, reverse polarity, short circuit, over current, insurance
- Up to 93% conversion rate, 30% conversion loss, 30% continuous power
- Temperature control fan: temperature ≤ 45 °C, the fan stops; temperature ≥ 45 °C, the fan starts
- Buzzer: when any protection of the inverter is triggered, the inverter will immediately disconnect the power supply, the load enters protection mode and the buzzer sounds

I wrecked this one by attaching PV panels directly to the inverter.
That worked fine as long as the battery was happy.
At oner point, though, the BMS turned it off, the voltage rose too high, and the inverter was destroyed.

### PUGU

[PUGU 2500W/5000W reiner sinus Spannungswandler Wechselrichter 24V 230V Inverter mit USB](https://www.ebay.de/itm/353807609969) for eur 186 mit 5 Jahre Garantie.

<!---

Artikelmerkmale
Artikelzustand: 
Neu: Neuer, unbenutzter und unbeschädigter Artikel in der ungeöffneten Originalverpackung (soweit ... Mehr zum ThemaÜber den Zustand 
Hersteller: 
No-Name
Produktart: 
Elektro- & Sat-Technik 
Herstellernummer: 
nicht zutreffend
Teilebereich Elektro- & Sat-Teil: 
Stromerzeugung 
Angebotspaket: 
Ja
Präzise Produktart: 
Reiner Sinus Spannungswandler 24v 230v 
Beschreibung des Paketinhalts: 
Spannungswandler reiner sinus
Modifizierter Artikel: 
Nein 
Marke: 
PUGU
Eingangsspannung: 
24v 
Ausgangsspannung: 
230v
Dauerleistung: 
2500w 
Spitzenleistung: 
5000w
Nettogewicht: 
3,6kg 
Größe: 
380*180*90mm
Wellenform: 
reine Sinuswelle 
Ausgewählte Suchfilter: 
Spannungswandler 24v 230v
Ausländisches Produkt: 
Ja 
Zutreffende Regionen: 
Haus, Garten, Auto, Wohnwagen, Boot, LKW, Camping

2500W/5000W Reiner Sinus Spannungswandler Wechselrichter 24V 230V inverter & USB

Dieser reiner sinus Spannungswandler, auch als Wechselrichter oder Inverter bekannt, wandelt 24 V Gleichspannung in 230 V Wechselspannung um. Somit kann man mit ihm übliche 230 V - Geräte ( Notebook, Kleinfernseher, Radio, Haushaltsgeräte usw. ) bis 2500 Watt Leistungsaufnahme über ein 24 V - Bordnetz ( Auto, KFZ, Boot, Batterie) . 

Intelligente Temperaturregelung mit zwei Lüftern:
Wenn die Innentemperatur des Wechselrichters 45 ° C ± 5 ° C überschreitet, startet der Lüfter automatisch (Steuerung des Lüfterstarts über den Temperaturschalter). Wenn die Temperatur 75 ± 5 ° C überschreitet, ertönt der Summer alle 0,2 Sekunden, die Anzeigeleuchte leuchtet mit dem Summer auf, der Lüfter dreht sich weiter und der Wechselrichter unterbricht automatisch die Ausgabe. Wenn die Temperatur wieder normal ist, stellt der Wechselrichter den Ausgang wieder her und startet die Maschine neu.
 
Mit einer 5V 2.1A Power USB:
Dieser modifizierte Sinus-Wechselrichter verfügt über einer USB-Stromanschlüsse, die 5 V 2,1 A liefern können. Sie können Ihr Telefon über diese USB-Buchse aufladen, ohne dass eine externe Stromquelle erforderlich ist.
 
Mit Verwenden der drahtlosen Fernbedienung
Für Sie bedeutet dies, dass Sie das Öffnen und Schließen des Wechselrichters in 15 Metern Höhe frei steuern können. Gleichzeitig hat die Fernbedienung die Funktion, den aktuellen Batteriestand anzuzeigen.Die drahtlose Fernbedienung kann im Allgemeinen innerhalb von 15 bis 20 m gesteuert werden

Leistungsmerkmale:

Mit Verwenden der drahtlosen Fernbedienung
Reiner Sinus Welle : Die gleiche Wellenform wie unser Home-Grid-System kann alle Arten von Geräten starten und wird Ihren Geräten keinen Schaden zufügen.
Mit 5V 2.1A Power USB:
Dieser reine Sinus Wechselrichter verfügt über zwei Power USB Buchsen und kann 5V 2.1 Ampere liefern. Sie können Ihr Telefon über diese USB-Buchse aufladen, ohne dass eine externe Stromquelle erforderlich ist.
Schutz gegen zu geringe Eingangsspannung, Überlastung sowie Übertemperatur
Verpolung
Soft-start Funktion
Automatische Spannungsregulierung (AVR)
Intelligentes Energie Management (IPM)
Intelligente Lüftersteuerung(IFC): Ruhig bei der Arbeit, wird nur laufen, wenn die Temperatur über 45 ℃ ist
Vollständiger Funktionstest vor der Auslieferung!

Einsatzfälle:

Sinuswelle: Spannungswandler mit echter Sinuswelle arbeiten genau. Zum Betrieb von "sensiblen" elektrischen Geräten welche in der Medizin verwendet werden, oder auch Fotoausrüstungen, sowie elektrische Mess- und Regelinstrumente / Einrichtungen. Unbedingt zu verwenden z.B. bei Pumpen, Heizungen, elektrische Bartschneidemaschinen und Zahnbürsten, Fernseh- und HiFi-Geräte sowie Kaffeemaschinen. Der Spanungswandler ist ideal für alle Arten von Reisen (Camping / Zelten, Boot, etc.) geeignet sowie für viele Arten des mobile Einsatzes.

Bürokommunikation: Computer, Drucker, Monitore, Fax-Geräte, Scanner
Unterhaltungselektronik: TV, DVD-Player, Spielkonsolen; HiFi-Anlagen, Musikinstrumente, Satelliten-Receiver
Haushaltsgeräte: Staubsauger, Lüfter / Ventillatoren, Rasierapparat
Küchengeräte: Kaffeautomaten, Mixer, Eis-Maschine, Toaster
Werkzeuge: Bohrmaschine, Schleifmaschine, Kompressoren, Pumpen

Lieferumfang:

1 x Spannungswandler reiner sinus 
2 x Anschlusskabels
1 x Fernbedienung
1 x Bedienungsanleitung

Wie wählt man einen geeigneten Spannungswandler?
Falls Sie die Leistung eines Ihrer Geräte nicht wissen, können Sie diese wie folgt errechnen. Ampere (A) x Volt (V) = Watt.
Alle Kühlgeräte, Fernsehgeräte, Monitore, Notebooks, Pumpen, Werkzeugmaschinen und viele weitere Induktivgeräte haben einen extrem hohen kurzfristigen Einschaltstrom.
Wenn z. B. auf Ihrem TV-Gerät eine Leistung von 150 Watt angegeben ist, kann der Einschaltstrom bis zur 10-fachen Leistung betragen: Dies würde bedeuten, dass Sie einen Wechselrichter aussuchen müssen, der kurzfristig 1500 Watt Leistung akzeptieren kann!

Für Induktive Einsatzfälle
Wenn die Verbindung mit induktiven Lasten (z.B. Kompressor, Pumpe, alten CRT-TV, Kühlschrank, Ice Anlage, Klimaanlage , Relais, Leuchtstofflampe, Staubsauger ), wählen Sie bitte Wechselrichter, dessen Stromrate ist 3-7 mal höher als die Lasttarif Macht. Zum Beispiel für eine 150w Kühlschrank, wählen Sie bitte eine 1000w reiner sinus Wechselrichter oder höher, für eine Klimaanlage 800w, wählen Sie bitte 2500W reiner sinus Wechselrichter oder höher. 

Technische Daten:
Modell No. 2500W-24V

--->

- Dauerausgangsleistung 2500W
- Max. kurzfristige Spitzenleistung 5000W
- Eingangsgleichspannung 24V DC
- Ausgangswechselspannung 230V AC
- Regelbereich ±5%
- Frequenz 50Hz±3%
- Wirkungsgrad >87%
- Leerlaufstrom 0.8A
- Ausgangswellenform reine Sinuswelle
- Klirrfaktor 2%
- Temperatuschutz (75±5)℃
- Schutz vor geringer Eingangsspannung JA
- Verpolungsschutz JA
- Schaltungsschutz JA
- Schutz vor Kurzschluß JA
- Schutz vor Überlast JA
- Nettogewicht 3.5±0.05 kg
- Größe 380 x 180 x 90mm

### MPP Solar PIP8048MAX

8 kW PIP8048MAX from [MPP Solar](https://www.mppsolar.com), tel 010017-00886.2.8797.8896.
ordered per email to [sales@mppsolar.com](mailto:sales@mppsolar.com).

[Specifications](/doc/pv/charger_inverter_mpp_solar/8048max_wp_data.pdf):

- Max continuous output 8 kW
- Max PV input 8 kW, 500 V, 2 x 18 A (9 kW)
- Max charging current @ 48 VDC 120 A (utility + charging) (5.7 kW)
- Max AC current 60 A (13 kW)

## Switch Between Solar and Grid Main

- Switch between mains and battery power: could be a relay driven by the battery voltage, the BMS, or the inverter
    - [MAX6326 application note](https://www.maximintegrated.com/en/design/technical-documents/app-notes/1/1136.html) (2002)
    - [Using inverter output and a DPDT relay](http://www.reuk.co.uk/wordpress/electric-circuit/switch-from-inverter-to-mains-automatically) (double pole double throw);
    [low voltage disconnect kit](http://www.reuk.co.uk/wordpress/reuk-shop-low-voltage-disconnects-lvd/buy-mini-12v-programmable-low-voltage-disconnect-lvd)
    - [Using Arduino](https://forum.allaboutcircuits.com/threads/how-to-wire-up-a-relay-for-switching-between-two-dc-sources-solar-and-battery-to-power-a-ardu-proj.153002)
    - [Conrad Components 195308 Batteriewächter Bausatz 12 V/DC](https://www.conrad.de/de/p/conrad-components-195308-batteriewaechter-bausatz-12-v-dc-195308.html) &ndash; order smart switch tel + 49-9604/40 87 87 +  relais DPDT doppel-poliges wechsel-relais, vielleicht bistabil?
    - [ELV H-Tronic MPC 1000 Netz-Umschaltstation](https://de.elv.com/h-tronic-mpc-1000-netz-umschaltstation-250136)
- Using a latching relay (impulsrelais, haftrelais, einrastrelais, ankerrelais, kammrelais, cradle relay?):
    - [Printrelais 12V Ningbo S7001A12W 10A 250V Wechselkontakt](https://www.amazon.de/dp/B07J4SS7S6/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07J4SS7S6p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMTE0N1VEWkVTMU5ZJmVuY3J5cHRlZElkPUEwNDE5NzQ5VzJUMTFUNjZRREdHJmVuY3J5cHRlZEFkSWQ9QTA0MjAyNTUyMVFIOTlOUFJIMDlDJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)
    - [Printrelais 12V Song Chuan 882N-1CH-S 12VDC 12VDC 8A 250V Wechselkontakt](https://www.amazon.de/Printrelais-Song-Chuan-882N-1CH-S-Wechselkontakt/dp/B07JJX65BK/ref=pd_sbs_1?pd_rd_w=aFyK3&pf_rd_p=a0a2bb41-2b9d-47ea-9dff-8a3ade3a13d6&pf_rd_r=1EP1VJ2QQVSTZ1CQS37E&pd_rd_r=5d47c41c-c8b0-4684-b82f-5572cb9563ea&pd_rd_wg=HWhgC&pd_rd_i=B07JJX65BK&psc=1)
    - [Amagogo SONGLE 12V 1 CH Relais SRD 12VDC SL C 250V AC 30V 10A DC](https://www.amazon.de/Amagogo-St%C3%BCck-SONGLE-Relais-Werkstatt/dp/B08L3PD396/ref=sr_1_21?dchild=1&keywords=relais+ wechsel+ 3v+ 200v&qid=1619706658&sr=8-21)
    - [RM1A23D25 Halbleiterrelais Industriegehäuse 25A 230VAC](https://www.reichelt.de/halbleiterrelais-industriegehaeuse-25a-230vac-rm1a23d25-p79464.html?CCOUNTRY=445&LANGUAGE=de)
    - [G2R-1-E 12VDC SPDT 16A 12V 250VAC OMRON Print relais 1xUM # 712318](https://www.ebay.de/itm/183687344817?epid=1033505777&hash=item2ac49e72b1:g:TEcAAOSw8CJcmf1t)
    - [4 pcs. HF3FD/012-ZTF Hongfa Relais Relay 12VDC 10A 400R SPDT NEW #BP](https://www.ebay.de/itm/233413456182?hash=item365886b136:g:3rAAAOSwC99d2sS9)
    - [Accele 5086E Single Coil DPDT 12-18 Volt Electro-Mechanical Latching Relay](https://www.ebay.com/itm/Accele-5086E-Single-Coil-DPDT-12-18-Volt-Electro-Mechanical-Latching-Relay-/362747414644?hash=item54756e4874)
    - [Swiss Royals Einrastrelais-Modul mit Touch-Bistable-Schalter, 5 V, 1 Kanal](https://www.amazon.de/Swiss-Royals-Einrastrelais-Modul-Touch-Bistable-Schalter-Kanal/dp/B07CJJ7H26/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=einrastrelais&qid=1619711492&sr=8-1)
    - [Ankerrelais SIEMENS V23162-A0420-B104 10-polig, Maße: 2,5 x 3,5 x 2 cm](https://bw-schmitti.de/produkt/ankerrelais/)
    - [Latching DPDT relay](https://eu.mouser.com/Electromechanical/Relays/General-Purpose-Relays/_/N-5g36?P=1z0z1s3Z1yvsbamZ1yvrxpgZ1z0x3ubZ1z0x3c8)
    - [GRM8-02 Verzögerungsrelais Elektronisches Impulsrelais Latching Relay Memory Relay AC/DC 12-240V Marke YWBL-WH](https://www.amazon.de/GRM8-02-Verz%C3%B6gerungsrelais-Elektronisches-Impulsrelais-Latching/dp/B07R1SG5DQ/ref=sr_1_1_sspa)
    - [ABB E290-16-10/230 Stromstoßschalter](https://www.amazon.de/ABB-E290-16-10-Stromsto%C3%9Fschalter-Fernschalter-Schlie%C3%9Fer/dp/B01AW2CJUE/ref=sr_1_8)
    - [Eltako 22002601 REG-Schaltrelais, 2 Wechsler 2000W, UC, potentialfrei ER12-002-UC](https://www.amazon.de/Eltako-ER12-002-8-230V-UC-Schalt-Steuerrelais/dp/B000UWEXE2/ref=sr_1_13)
    - [Bistabiles Impulsrelais BR-11 230V 16A](https://www.ebay.de/itm/164835076997)
    - [Leistungsrelais 10A LY2NJ DPDT 220/230V](https://www.ebay.de/itm/154051674040)
    - [HF115F-A/230-2Z4BF HONGFA Relais Relay DPDT 230VAC 16A 32, 5K](https://www.ebay.de/itm/333464680079)
    - [T92P11A22-240 TE Relay DPDT 240VAC 30A 3800R](https://www.ebay.de/itm/233929057889)
    - [Her Kindness AC 240V 8-Pin Electromagnetic Power Relay with HH62P JQX-13F 10A, PTF08A Socket](https://www.amazon.de/-/en/dp/B089Q8QSXL)

- Raise 3 volt to 12 v: If you have 12V available elsewhere in your system, an NPN transistor and a resistor of 200 ohms or so between the output and the transistor base will do it. Connect the Emitter to 0V, the collector to one side of the relay and the relay to 12V. Be sure to use a freewheeling diode across the relay coil to protect the transistor.
- [Solar panels in series vs parallel](https://www.explorist.life/solar-panels-series-vs-parallel)
- [Victron inverter model Phoenix Compact 1600](file:///UsersUsers/jta/j/doc/hardware/manual/victron_phoenix_inverter/manual_phoenix_inverter_compact_1200_1600.pdf)
- Battery fuses: 60A between charge controller and battery, 300A between battery and inverter

## Monitoring

- [The BatteryMonitor Project](http://github.com/simat/BatteryMonitor/wiki)
- [Measure DC Voltage and Current with an Arduino](https://dronebotworkshop.com/dc-volt-current)
- [LTC6804-1/LTC6804-2 Multicell Battery Monitors](https://www.analog.com/media/en/technical-documentation/data-sheets/680412fc.pdf),
improved [LTC6811-1/LTC6811-2 12-Cell Battery Stack Monitors](https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6811-1-6811-2.pdf)
- [Monitoring batteries voltages connected in series using Arduino Uno utilising relay technique](https://www.engineersgarage.com/arduino-series-battery-voltage-monitor)
- [Battery status monitoring system using ESP8266 and Arduino IoT cloud](https://theiotprojects.com/battery-status-monitoring-system-using-esp8266-arduino-iot-cloud)
- [Mit Shelly Uni DC Spannung messen, Hinweise zur Hardware und Ideen](https://www.shelly-support.eu/forum/index.php?thread/5463-mit-uni-dc-spannung-messen-hinweise-zur-hardware-und-ideen)

Here is an initial monitoring plan 2021-10-29:

- solar radiation with a lightmeter, to have an indication whether the sun is shining or not
- panel voltage in the range 0-90 V
- panel current via the (very small) voltage differential between two points in the cable, or use a clamp
- charger current via the (very small) voltage differential between the charger and the battery pole, or use a clamp
- battery voltage B- to B+ 
- BMS +  battery voltage P- to B+ 
- inverter current via a clamp

The first article above looks very promising to achieve some of this.

### Hall-Effect Current Measurement

Currently planning to measure the DC PV panel input, charger output and inverter input currents using
a [30A Hall-effeet sensor module ACS712ELC 30A for Arduino](https://de.aliexpress.com/item/32316428367.html
):

- Sensor chip ACS712ELC-30A
- 5V power supply, on-board power indicator
- Measures positive and negative 30A, producing analogue output data 66mV/A
- Zero current produces VCC / 2
- Dimensions 31 mm x 13 mm
- [Datasheet](file:///Users/jta/j/doc/hardware/manual/acs712/acs712elctr_30a_t_datasheet.pdf)

### Control Inverter from BMS

- [Solar Inverter Control w/ Optocoupler SSR and BMS](https://youtu.be/7gEFTFwOFoY) by Will Prowse


## Foerderung

KfW-Bundesland Baden-Württemberg is running
a [Förderprogramm](https://www.effizienzhaus-online.de/photovoltaik-foerderung)
[Netzdienliche Photovoltaik-Batteriespeicher](https://um.baden-wuerttemberg.de/de/energie/informieren-beraten-foerdern/foerdermoeglichkeiten/pv-speicher)
supporting Stromspeicher in Verbindung mit neuer Photovoltaikanlage with a Zuschuss of 200 Euro pro kWh Speicherkapazität. 
Allerdings:

> Aufgrund der hohen Nachfrage sind die Fördermittel leider erschöpft. Es können deshalb keine neuen Anträge mehr gestellt werden.

Our 24V battery stores 200 Ah or ca. 24 * 0.2 = 12 kWh, so we could have asked for 2400 Euro Zuschuss.

## Battery Charge vs Consumption

Measurements comparing battery charge state with the kWh consumed in the 220 V AC circuit.
Battery loss versus gain over day and power consumption over night:

<table class="r">
<tr><td>date time</td><td>E</td><td>S</td><td>V</td><td>kWh</td><td>h</td><td>&Delta;V</td><td>kWh</td></tr>
<tr><td>2021-07-16 18:00</td><td></td><td></td><td>13.7</td><td>32.8</td></tr>
<tr><td>2021-07-17 08:00</td><td></td><td></td><td>12.9</td><td>33.1</td><td>14</td><td>0.8</td><td>0.3</td></tr>
<tr><td>2021-07-17 17:50</td><td></td><td></td><td>14.3</td><td>33.5</td></tr>
<tr><td>2021-07-18 06:30</td><td></td><td></td><td>12.8</td><td>34.0</td><td>13</td><td>1.5</td><td>0.5</td></tr>
<tr><td>2021-07-18 20:20</td><td></td><td></td><td>12.9</td><td>34.5</td></tr>
<tr><td>2021-07-19 08:20</td><td></td><td></td><td>12.8</td><td>35.0</td><td>12</td><td>0.1</td><td>0.5</td></tr>
<tr><td>2021-07-19 20:20</td><td>0.0</td><td>59.9</td><td>13.0</td><td>35.5</td></tr>
<tr><td>2021-07-20 08:00</td><td>0.0</td><td>59.9</td><td>12.9</td><td>35.9</td><td>12</td><td>0.1</td><td>0.4</td></tr>
<tr><td>2021-07-20 14:00</td><td>0.8</td><td>60.2</td><td>14.2</td><td>36.2</td></tr>
<tr><td>2021-07-20 20:20</td><td>0.8</td><td>60.4</td><td>13.1</td><td>36.5</td></tr>
<tr><td>2021-07-21 07:20</td><td>0.8</td><td>60.4</td><td>12.8</td><td>36.9</td><td>11</td><td>0.3</td><td>0.4</td></tr>
</table>

Starting 2021-07-19 after installing the second charger for the roof ridge panels, I also added the total kWh produced by the two chargers attached to
the four roof ridge panels facing east U<sub style="font-size:75%">E</sub> and
the four balcony roof ones facing south U<sub style="font-size:75%">S</sub> and
started monitoring power generation and consumption from one morning to the next;
U<sub style="font-size:75%">E</sub>, U<sub style="font-size:75%">S</sub>,
&Delta;E, &Delta;S and consumption C are in kWh per 24h.

<table class="r">
<tr><td>date time</td>
<td>U<sub style="font-size:75%">E</sub></td>
<td>U<sub style="font-size:75%">S</sub></td>
<td>V</td><td>kWh</td> <td>&Delta;E</td><td>&Delta;S</td><td>C</td></tr>

<tr><td>2021-07-17 08:00</td><td></td><td></td><td>12.9</td><td>33.1</td> <td></td><td></td><td></td></tr>
<tr><td>2021-07-18 06:30</td><td></td><td></td><td>12.8</td><td>34.0</td> <td></td><td></td><td>0.9</td></tr>
<tr><td>2021-07-19 08:20</td><td></td><td></td><td>12.8</td><td>35.0</td> <td></td><td></td><td>1.0</td></tr>
<tr><td>2021-07-20 08:00</td><td>0.0</td><td>59.9</td><td>12.9</td><td>35.9</td> <td></td><td></td> <td>0.9</td></tr>
<tr><td>2021-07-21 07:20</td><td>0.8</td><td>60.4</td><td>12.8</td><td>36.9</td> <td>0.8</td><td>0.5</td><td>1.0</td></tr>
<tr><td>2021-07-22 12:40</td><td>2.8</td><td>61.0</td><td>14.2</td><td>38.3</td> <td></td><td></td><td></td></tr>
<tr><td>2021-07-22 20:10</td><td>3.1</td><td>61.1</td><td>13.1</td><td>38.7</td> <td></td><td></td><td></td></tr>
<tr><td>2021-07-23 06:20</td><td>3.1</td><td>61.1</td><td>12.9</td><td>39.0</td> <td>1.1</td><td>0.3</td><td>1.0</td></tr>
<tr><td>2021-07-24 08:00</td><td>4.2</td><td>61.4</td><td>12.8</td><td>40.1</td> <td>1.1</td><td>0.3</td><td>1.1</td></tr>
<tr><td>2021-07-24 18:30</td><td>4.6</td><td>62.2</td><td>14.2</td><td>40.6</td></tr>
<tr><td>2021-07-24 23:40</td><td>4.6</td><td>62.2</td><td>12.8</td><td>41.2</td></tr>
<tr><td>2021-07-25 06:40</td><td>4.6</td><td>62.2</td><td>12.1</td><td>off</td></tr>
<tr><td>2021-07-25 10:40</td><td>4.6</td><td>62.2</td><td>12.4</td><td>off</td></tr>
</table>

&Delta;E is larger than &Delta;S. 
There may be several reasons for this: E probably receives more sun than S, since S is shadowed by the walnut tree.
Also, E may already generate enough power to almost fully charge the battery, so S cannot add that much more afterwards.

Set up the 24 V system with new battery and new inverter on August 30; added voltage and amperage readings from different devices V<sub style="font-size:75%">E</sub>, A<sub style="font-size:75%">E</sub>, V<sub style="font-size:75%">S</sub>, A<sub style="font-size:75%">S</sub>, inverter V<sub style="font-size:75%">I</sub> and voltmeter on battery poles V<sub style="font-size:75%">B</sub>:

<table class="r" style="font-size:70%">
<tr><td>date time</td>
<td>V<sub style="font-size:75%">E</sub></td> <td>A<sub style="font-size:75%">E</sub></td> <td>U<sub style="font-size:75%">E</sub></td>
<td>V<sub style="font-size:75%">S</sub></td> <td>A<sub style="font-size:75%">S</sub></td> <td>U<sub style="font-size:75%">S</sub></td>
<td>V<sub style="font-size:75%">I</sub></td> <td>V<sub style="font-size:75%">B</sub></td> <td>kWh</td> <td>&Delta;E</td> <td>&Delta;S</td> <td>C</td></tr>
<tr><td>2021-08-30 15:00</td>  <td></td> <td></td> <td>9.1</td> <td></td> <td></td> <td>67.1</td> <td>27.3</td> <td></td> <td>44.8</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-08-30 18:00</td>  <td></td> <td></td> <td>9.1</td> <td></td> <td></td> <td>67.3</td> <td>27.3</td> <td></td> <td>44.9</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-08-31 06:40</td>  <td colspan="12" style="text-align:left">BMS blocked</td></tr>
<tr><td>2021-08-31 08:40</td>  <td></td> <td></td> <td>9.1</td> <td></td> <td></td> <td>67.3</td> <td>26.4</td> <td></td> <td>45.4</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-08-31 20:40</td>  <td></td> <td></td> <td>9.5</td> <td></td> <td></td> <td>68.1</td> <td>26.5</td> <td></td> <td>46.1</td> <td>0.4</td>      <td>0.8</td>      <td>1.2</td></tr>
<tr><td>2021-09-01 08:20</td>  <td></td> <td></td> <td>9.5</td> <td></td> <td></td> <td>68.1</td> <td>26.4</td> <td></td> <td>46.6</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-09-01 21:40</td>  <td></td> <td></td> <td>10.3</td> <td></td> <td></td> <td>68.8</td> <td>26.5</td> <td></td> <td>47.3</td> <td>0.8</td>      <td>0.7</td>      <td>1.2</td></tr>
<tr><td>2021-09-01 23:10</td> <td colspan="12" style="text-align:left">BMS blocked</td></tr>
<tr><td>2021-09-02 09:30</td> <td colspan="12" style="text-align:left">Fixed loose BMS C8+  sensor</td></tr>
<tr><td>2021-09-02 09:30</td>  <td></td> <td></td> <td>10.3</td> <td></td> <td></td> <td>68.8</td> <td>26.5</td> <td></td> <td>83.9</td>  <td></td>        <td></td>         <td></td></tr>
<tr><td>2021-09-02 20:10</td>  <td></td> <td></td> <td>10.9</td> <td></td> <td></td> <td>69.0</td> <td>26.6</td> <td></td> <td>84.3</td>  <td></td>        <td></td>         <td></td></tr>
<tr><td>2021-09-03 09:00</td>  <td></td> <td></td> <td>10.9</td> <td></td> <td></td> <td>69.0</td> <td>26.3</td> <td></td> <td>84.9</td>  <td></td>        <td></td>         <td></td></tr>
<tr><td>2021-09-03 10:00</td>  <td>26.4</td> <td></td> <td>11.0</td> <td>26.3</td> <td></td> <td>69.0</td> <td>26.5</td> <td>25.8</td> <td>85.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 12:10</td>  <td>27.1</td> <td>7.7</td> <td>11.5</td> <td>27.1</td> <td>8.6</td> <td>69.1</td> <td>27.2</td> <td>26.5</td> <td>85.1</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 14:50</td>  <td></td> <td></td> <td>11.5</td> <td>28.2</td> <td>11.6</td> <td>69.5</td> <td>27.3</td> <td>26.6</td> <td>85.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 15:00</td>  <td>27.2</td> <td>-0.1</td> <td>11.5</td> <td>27.3</td> <td>0.0</td> <td>69.5</td> <td>27.3</td> <td>27.0</td> <td>85.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 16:40</td>  <td>28.1</td> <td>0.1</td> <td>11.8</td> <td>27.3</td> <td>0.0</td> <td>69.6</td> <td>27.3</td> <td>27.0</td> <td>85.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 16:50</td>  <td>27.4</td> <td>-0.1</td> <td>11.8</td> <td>27.3</td> <td>0.0</td> <td>69.6</td> <td>27.3</td> <td>26.6</td> <td>85.4</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 20:10</td>  <td>26.4</td> <td>-0.1</td> <td>11.8</td> <td>26.4</td> <td>0.0</td> <td>69.7</td> <td>26.5</td> <td>25.9</td> <td>85.6</td> <td>0.9</td> <td>0.7</td> <td>1.3</td></tr>
<tr><td>2021-09-03 22:20</td>  <td>26.4</td> <td>-0.1</td> <td>11.8</td> <td>26.3</td> <td>0.0</td> <td>69.7</td> <td>26.5</td> <td>25.9</td> <td>85.9</td> <td>0.9</td> <td>0.7</td> <td>1.7</td></tr>
<tr><td>2021-09-04 09:10</td>  <td>26.3</td> <td>+ 0.1</td> <td>11.8</td> <td>26.2</td> <td>0.2</td> <td>69.7</td> <td>26.4</td> <td>25.7</td> <td>86.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-04 13:30</td>  <td>27.3</td> <td>+ 7.1</td> <td>12.6</td> <td>27.3</td> <td>11.7</td> <td>70.1</td> <td>27.3</td> <td>26.6</td> <td>86.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-04 15:30</td>  <td>27.1</td> <td>-0.1</td> <td>12.7</td> <td>27.4</td> <td> 0.0</td> <td>70.3</td> <td>27.5</td> <td>26.7</td> <td>86.6</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-05 09:00</td>  <td>26.4</td> <td>+ 0.1</td> <td>12.7</td> <td>26.3</td> <td> 0.1</td> <td>70.4</td> <td>26.4</td> <td>25.8</td> <td>87.2</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-05 13:00</td>  <td>27.9</td> <td>+ 3.2</td> <td>13.4</td> <td>27.9</td> <td>11.2</td> <td>70.7</td> <td>28.3</td> <td>27.4</td> <td>87.4</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-05 16:10</td>  <td>27.6</td> <td>-0.1</td> <td>13.4</td> <td>27.4</td> <td> 0.0</td> <td>70.8</td> <td>27.5</td> <td>26.9</td> <td>87.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-05 21:00</td>  <td>26.4</td> <td>-0.1</td> <td>13.4</td> <td>26.3</td> <td> 0.0</td> <td>70.9</td> <td>26.5</td> <td>25.8</td> <td>87.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-06 07:30</td>  <td>26.3</td> <td>-0.1</td> <td>13.4</td> <td>26.3</td> <td> 0.0</td> <td>70.9</td> <td>26.4</td> <td>25.8</td> <td>88.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-06 12:40</td>  <td>27.4</td> <td>+ 8.1</td> <td>14.0</td> <td>27.4</td> <td>10.8</td> <td>71.0</td> <td>27.5</td> <td>26.7</td> <td>88.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-06 17:20</td>  <td>27.9</td> <td>+ 0.1</td> <td>14.2</td> <td>27.9</td> <td> 5.0</td> <td>71.5</td> <td>28.0</td> <td>27.4</td> <td>88.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-06 19:30</td>  <td>26.5</td> <td>+ 0.0</td> <td>14.2</td> <td>26.4</td> <td> 0.0</td> <td>71.6</td> <td>26.6</td> <td>25.9</td> <td>88.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-06 21:00</td>  <td>26.5</td> <td>-0.0</td> <td>14.2</td> <td>26.4</td> <td> 0.0</td> <td>71.6</td> <td>26.6</td> <td>25.9</td> <td>89.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-07 09:10</td>  <td>26.5</td> <td>+ 0.2</td> <td>14.2</td> <td>26.4</td> <td> 0.3</td> <td>71.6</td> <td>26.6</td> <td>25.9</td> <td>89.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-07 13:40</td>  <td>27.5</td> <td>+ 6.8</td> <td>14.9</td> <td>27.5</td> <td>11.3</td> <td>72.1</td> <td>27.6</td> <td>26.8</td> <td>89.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-07 17:40</td>  <td>26.9</td> <td>+ 0.1</td> <td>14.9</td> <td>26.8</td> <td> 0.9</td> <td>72.3</td> <td>26.9</td> <td>26.3</td> <td>90.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-08 06:50</td>  <td>26.5</td> <td>-0.1</td> <td>15.0</td> <td>26.4</td> <td> 0.0</td> <td>72.3</td> <td>26.6</td> <td>26.3</td> <td>90.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-08 12:00</td>  <td>27.1</td> <td>+ 8.3</td> <td>15.3</td> <td>26.9</td> <td> 1.3</td> <td>72.4</td> <td>27.0</td> <td>26.4</td> <td>90.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-08 20:20</td>  <td>26.5</td> <td>-0.1</td> <td>15.7</td> <td>25.9</td> <td> 0.0</td> <td>72.9</td> <td>26.6</td> <td>26.4</td> <td>91.1</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-09 08:00</td>  <td>26.4</td> <td>+ 0.0</td> <td>15.7</td> <td>26.3</td> <td> 0.2</td> <td>72.9</td> <td>26.5</td> <td>25.8</td> <td>91.7</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-09 10:00</td>  <td>26.6</td> <td>+ 5.5</td> <td>15.8</td> <td>26.5</td> <td> 0.4</td> <td>73.0</td> <td>26.7</td> <td>26.0</td> <td>91.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-09 12:20</td>  <td>27.0</td> <td>+ 3.4</td> <td>16.1</td> <td>27.0</td> <td> 4.4</td> <td>73.0</td> <td>27.2</td> <td>26.6</td> <td>92.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-09 20:30</td>  <td>26.5</td> <td>-0.1</td> <td>16.5</td> <td>26.4</td> <td> 0.0</td> <td>73.7</td> <td>26.6</td> <td>26.2</td> <td>92.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-10 08:10</td>  <td>26.5</td> <td> 0.0</td> <td>16.5</td> <td>26.4</td> <td> 0.1</td> <td>73.7</td> <td>26.5</td> <td>26.2</td> <td>92.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-10 12:20</td>  <td>27.0</td> <td> 4.6</td> <td>16.7</td> <td>27.0</td> <td> 5.9</td> <td>73.9</td> <td>27.1</td> <td>26.7</td> <td>93.2</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-10 22:40</td>  <td>27.0</td> <td> 0.0</td> <td>17.0</td> <td>27.0</td> <td> 0.0</td> <td>74.4</td> <td>26.5</td> <td>26.2</td> <td>93.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-11 08:30</td>  <td>26.4</td> <td> 0.2</td> <td>17.0</td> <td>26.4</td> <td> 0.3</td> <td>74.4</td> <td>26.5</td> <td>26.1</td> <td>94.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-11 12:50</td>  <td>26.8</td> <td> 3.0</td> <td>17.3</td> <td>26.7</td> <td> 3.9</td> <td>74.6</td> <td>26.8</td> <td>26.4</td> <td>94.7</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-11 21:50</td>  <td>25.3</td> <td> 0.1</td> <td>17.4</td> <td>25.2</td> <td> 0.0</td> <td>75.2</td> <td>26.4</td> <td>    </td> <td>95.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-12 09:20</td>  <td>25.2</td> <td> 0.1</td> <td>17.4</td> <td>25.2</td> <td> 0.1</td> <td>75.2</td> <td>26.3</td> <td>    </td> <td>95.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-12 11:00</td>  <td>26.6</td> <td> 8.7</td> <td>17.5</td> <td>26.5</td> <td> 0.2</td> <td>75.2</td> <td>26.5</td> <td>26.2</td> <td>95.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-12 12:20</td>  <td>26.9</td> <td> 3.5</td> <td>17.8</td> <td>26.7</td> <td> 3.7</td> <td>75.7</td> <td>26.8</td> <td>26.4</td> <td>96.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-12 16:30</td>  <td>27.4</td> <td> 1.2</td> <td>18.5</td> <td>27.4</td> <td>11.8</td> <td>76.6</td> <td>26.8</td> <td>27.1</td> <td>96.2</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-13 08:00</td>  <td>    </td> <td> 0.0</td> <td>18.5</td> <td>25.4</td> <td> 0.0</td> <td>76.7</td> <td>25.3</td> <td>25.2</td> <td>96.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-13 12:40</td>  <td>27.4</td> <td> 8.0</td> <td>19.0</td> <td>27.3</td> <td>10.8</td> <td>76.8</td> <td>27.4</td> <td>26.9</td> <td>97.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-13 16:20</td>  <td>27.2</td> <td>-0.1</td> <td>19.3</td> <td>27.5</td> <td> 0.0</td> <td>77.3</td> <td>27.3</td> <td>27.3</td> <td>97.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-13 22:10</td>  <td>26.5</td> <td>-0.1</td> <td>19.3</td> <td>26.4</td> <td> 0.0</td> <td>77.4</td> <td>26.6</td> <td>26.2</td> <td>97.6</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-14 08:10</td>  <td>26.5</td> <td>+ 0.1</td> <td>19.3</td> <td>26.4</td> <td> 0.1</td> <td>77.4</td> <td>26.6</td> <td>26.2</td> <td>97.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-14 11:00</td>  <td>26.5</td> <td>+ 3.4</td> <td>19.4</td> <td>26.4</td> <td> 0.5</td> <td>77.4</td> <td>26.6</td> <td>26.2</td> <td>98.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-14 12:10</td>  <td>27.0</td> <td>+ 8.1</td> <td>19.5</td> <td>26.9</td> <td> 2.8</td> <td>77.4</td> <td>26.9</td> <td>26.6</td> <td>98.4</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-14 22:20</td>  <td>26.4</td> <td>-0.1</td> <td>19.9</td> <td>26.3</td> <td> 0.0</td> <td>77.9</td> <td>26.4</td> <td>26.1</td> <td>98.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-15 11:40</td>  <td>26.4</td> <td>+ 0.1</td> <td>19.9</td> <td>26.3</td> <td> 0.2</td> <td>77.9</td> <td>26.5</td> <td>26.1</td> <td>99.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-15 20:00</td>  <td>26.1</td> <td>-0.1</td> <td>20.0</td> <td>26.0</td> <td> 0.0</td> <td>78.1</td> <td>26.2</td> <td>25.8</td> <td>100.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-16 15:20</td>  <td>26.8</td> <td>+ 3.6</td> <td>20.3</td> <td>26.8</td> <td>11.0</td> <td>78.8</td> <td>26.9</td> <td>26.4</td> <td>101.1</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-16 20:10</td>  <td>26.3</td> <td>-0.1</td> <td>20.4</td> <td>26.2</td> <td> 0.0</td> <td>79.3</td> <td>26.3</td> <td>26.0</td> <td>101.4</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-17 08:50</td>  <td>26.0</td> <td> 0.1</td> <td>20.4</td> <td>25.9</td> <td> 0.2</td> <td>79.3</td> <td>26.0</td> <td>25.7</td> <td>101.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-17 12:00</td>  <td>27.0</td> <td> 8.1</td> <td>20.8</td> <td>26.9</td> <td> 5.4</td> <td>79.4</td> <td>27.0</td> <td>26.7</td> <td>102.1</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-18 09:20</td>  <td>26.4</td> <td> 0.1</td> <td>21.4</td> <td>26.3</td> <td> 0.1</td> <td>80.9</td> <td>26.5</td> <td>26.1</td> <td>102.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-18 15:50</td>  <td>27.7</td> <td>-0.1</td> <td>22.2</td> <td>27.6</td> <td> 3.8</td> <td>81.8</td> <td>27.7</td> <td>26.1</td> <td>103.2</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-18 19:50</td>  <td>26.6</td> <td>-0.1</td> <td>22.2</td> <td>26.5</td> <td> 0.0</td> <td>81.9</td> <td>27.6</td> <td>26.3</td> <td>103.4</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-19 09:30</td>  <td>26.4</td> <td> 0.0</td> <td>22.2</td> <td>26.3</td> <td> 0.1</td> <td>81.9</td> <td>26.4</td> <td>26.1</td> <td>104.2</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-19 21:50</td>  <td>26.1</td> <td> 0.0</td> <td>22.3</td> <td>26.0</td> <td> 0.1</td> <td>81.9</td> <td>26.1</td> <td>25.8</td> <td>104.7</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-20 11:50</td>  <td>26.3</td> <td> 0.4</td> <td>22.3</td> <td>26.3</td> <td> 1.8</td> <td>82.0</td> <td>26.4</td> <td>26.0</td> <td>105.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-20 22:20</td>  <td>25.9</td> <td>-0.0</td> <td>22.5</td> <td>25.8</td> <td> 0.0</td> <td>82.5</td> <td>25.9</td> <td>25.6</td> <td>106.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-21 09:00</td>  <td>25.9</td> <td>-0.0</td> <td>22.5</td> <td>25.8</td> <td> 0.1</td> <td>82.5</td> <td>25.9</td> <td>25.8</td> <td>106.3</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-21 19:50</td>  <td>26.1</td> <td>-0.1</td> <td>23.0</td> <td>26.0</td> <td> 0.0</td> <td>83.7</td> <td>26.2</td> <td>25.9</td> <td>106.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-22 21:00</td>  <td>26.4</td> <td>-0.1</td> <td>23.9</td> <td>26.3</td> <td> 0.0</td> <td>85.0</td> <td>26.4</td> <td>25.9</td> <td>108.2</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-23 09:20</td>  <td>26.1</td> <td> 0.0</td> <td>23.9</td> <td>26.0</td> <td> 0.1</td> <td>85.0</td> <td>26.2</td> <td>25.8</td> <td>108.6</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-23 12:50</td>  <td>27.3</td> <td> 8.0</td> <td>24.4</td> <td>27.2</td> <td>11.2</td> <td>85.3</td> <td>27.2</td> <td>26.8</td> <td>108.7</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-24 08:10</td>  <td>26.5</td> <td>-0.1</td> <td>24.8</td> <td>26.4</td> <td> 0.0</td> <td>86.5</td> <td>26.5</td> <td>26.2</td> <td>109.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-24 11:50</td>  <td>27.2</td> <td> 8.6</td> <td>25.1</td> <td>27.1</td> <td> 4.6</td> <td>86.5</td> <td>27.2</td> <td>26.9</td> <td>109.8</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-27 09:50</td>  <td>26.3</td> <td> 0.1</td> <td>26.3</td> <td>26.3</td> <td> 0.2</td> <td>88.4</td> <td>26.4</td> <td>26.1</td> <td>112.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-10-02 12:40</td>  <td>27.0</td> <td> 3.8</td> <td>29.0</td> <td>26.9</td> <td> 5.1</td> <td>91.9</td> <td>27.0</td> <td>26.6</td> <td>116.6</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-10-03 21:50</td>  <td>25.9</td> <td> 0.0</td> <td>29.4</td> <td>25.8</td> <td> 0.0</td> <td>92.6</td> <td>25.9</td> <td>25.6</td> <td>118.9</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-10-04 08:20</td>  <td>    </td> <td>    </td> <td>    </td> <td>    </td> <td>    </td> <td>    </td> <td>25.7</td> <td>    </td> <td>119.5</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-10-05 19:10</td>  <td>25.7</td> <td> 0.0</td> <td>29.4</td> <td>25.7</td> <td> 0.0</td> <td>92.7</td> <td>25.7</td> <td>25.4</td> <td>119.9</td> <td></td> <td></td> <td></td></tr>

<!--

jc> 29.4-9.1
        20.3
jc> 92.7-67.1
        25.6
jc> 119.9-83.9
        36
jc> 47.3-44.8
        2.5
jc> 20.3/36
        0.5638888889
jc> 25.6/36
        0.7111111111
jc> c = 36 +  2.5
        c = 38.5
        38.5
jc> c/36
        1.069444444
-->

<tr><td>36-day total</td>   <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td>20.3</td> <td>25.6</td> <td>38.5</td></tr>
<tr><td>1-day average</td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td>0.56</td> <td>0.71</td> <td>1.07</td></tr>
</table>

While the battery was blocked in the night between September 1-2, the consumption meter jumped from 47.3 to 83.9 kWh, so deduct 36.6 from the total consumption.

The sun shone almost uninterrupted every day all day September 1-5, so the batteries should reach 100% SOC (or whatever maximum charge is desired) if everything is working correctly.

September 3: With the chargers charging slightly at 10 o'clock in the morning, producing 0.1-0.2 A each, the different devices, chargers `S`, `E`, inverter `I` and voltmeter on battery poles `B` report the following voltages:

<table class="r">
<tr><td>date time</td>         <td>E</td>   <td>S</td>    <td>I</td>    <td>B</td></tr>
<tr><td>2021-09-03 10:00</td> <td>26.4</td> <td>26.3</td> <td>26.5</td> <td>25.8</td></tr>
</table>

On September 3 just before three in the afternoon, V<sub style="font-size:75%">E</sub> and A<sub style="font-size:75%">E</sub>, V<sub style="font-size:75%">S</sub> dropped from 28.2 &middot; 11.6 down to 27.3 &middot; 0.0 within a minute or so.
Why?
Was that the switch from boost charging to float charging?
Should I raise the boost charging time to increate the battery state of charge SOC?

Later the same day, just before five, V<sub style="font-size:75%">S</sub> and A<sub style="font-size:75%">S</sub> dropped from 28.2 &middot; + 0.1 down to 27.4 &middot; -0.1; also to stop charging because a limit was hit, I assume.

The battery pole voltage is still just 26.6 as soon as charging has stopped.

I raised the boost duration from 120 to 180. I want to raise the battery 'fully charged' level up to 28 V at least, preferably 29.
On the other hand, a resting voltage **below 25 V is getting low** and **above 26.8 V is nearly full**.
So, maybe I am in a pretty good window now.

In the evening of September 3, we watched TV and consumed 0.4 kWh.
The battery pole voltage remained unchanged at 25.9 V, so all seems to be well.

2021-09-06: During the night, the battery lost 0.1 V going from 25.9 to 25.8 to give out 0.8 kWh; pretty good going.

2021-09-06: Raised float charging voltage from 27.6 to 28, and boost reconnect charging voltage from 26.4 to 26.8 V, trying to achieve a resting battery pole voltage in the evening and night above 26 V.
So far, the BMS has always shown at least 0.6 V higher voltage to the charger than the battery pole voltage.

2021-09-06: Watched
the [float charging video](https://youtu.be/6vTaCkTVl7I) and
modified the float charging voltage to equal the absorbtion or boost one, setting both to 29 V.
Raised the boost charge reconnect voltage to 27 V,
Also reduced the equalisation duration to zero; it should be disabled anyway:
[east](doc/pv/charger/2021-09-06_tracer_batt_param_east_2.jpg),
[south](doc/pv/charger/2021-09-06_tracer_batt_param_south_2.jpg).

2021-09-07: i-tecc says about the BMS:
<br/>Q: Egal ob tagsueber geladen +  verbraucht wird oder nachts nur verbraucht ist Vp immer etwas hoeher als Vb, um ca. 0.6 bis 0.9 V. Ist das normal?
<br/>A: Nein. Es könnte ein Anschlussfehler vorliegen oder die Verbindung nicht richtig sitzen. Wir würden empfehlen zu untersuchen, woher die Differenz kommt. 
<br/>Q: Ich will gerne die batterie bis ca. 27 V volladen. Ich will sie gar nicht bis zur grenze von 29.2 vollpumpen. Ich habe gelesen, dass die batterie schon bei 26.8 V als fast voll betrachtet werden kann.
<br/>A: Die Ladeschlussspannung liegt bei 28.8V.
29.2V wäre zu hoch, alles unter 28.8V ist zu niedrig, um ein ausgeglichenes System zu erhalten.
Sie brauchen die 3.6V pro Einzelzelle, damit der Balancer arbeiten kann.
Sie können gerne ab und zu die Batterie nur mit 27V laden, allerdings sollten die 28.8V auch regelmäßig erreicht werden, gerade in der Anfangsphase/Initialladung.

So, I upped the charger boost and float charging voltages from 29 to 29.5 V to hopefully ensure the battery pole voltages reach 28.8 soon:
[east](doc/pv/charger/2021-09-07_tracer_batt_param_east.jpg),
[south](doc/pv/charger/2021-09-07_tracer_batt_param_south.jpg).
This forced me to raise the charging limit voltage to a higher value; I picked 29.6 V for that.

2021-09-08: One little puzzle solved: my digital voltmeter reports 0.6 V less than the inverter readout, so the observed difference so far between battery minus and BMS minus poles is actually and always has been non-existant.
So, I am assuming that V<sub style="font-size:75%">B</sub> is the more accurate measurement, and all the others are too high.

Some success raising the SOC: for the first time, the battery pole voltage is over 26 V in the early morning, before charging starts.

2021-09-13: at 16:25, the battery voltage is 27.3 and the south panels are in full sunshine.
Yet, the charger reports zero ampere charging current.
Apparently, it has switched off.
Why?
Did it possibly switch off because the bulk charging time is limited to 180 minutes?

2021-09-14: epever provided
new [recommended settings](doc/pv/charger/2021-09-14_epever_settings_recommended.png),
so i updated 
[east](doc/pv/charger/2021-09-14_tracer_batt_param_east.jpg) and
[south](doc/pv/charger/2021-09-14_tracer_batt_param_south.jpg).

2021-10-02: returned from a week's absence in ticino, battery full, over 26.6 V.
used lots ofg power for lightin, broken pc screen, everythin pluged in all the time.

2021-10-04: rained all day yesterday and today, no sunshoine, battery rather low, under 25 V, lights started flickering, turning on and off.
cbl turned off the inverter.
in the evening, i turned it on again.
after a while, the bms switched off, probably due to unbalanced cells. the battery was at 24.4 V, i think.
we switched to mains electricity and took down the battery to charge it above 28.8 for the bms to balance the cells.
solar pause.

2021-10-20: charging the entire chain of cells failed due to imbalanced cells, the bms blocks. total voltage 26.2 V, individual cell voltages:

1. 3.29
2. **3.27**
3. 3.29
4. 3.29
5. 3.29
6. 3.29
7. 3.29
8. 3.29

Started charging cell 2 with 3.3 V at 1 A at 2021-10-20 12:50.
It only took half an hour or so to et it up to 3.29 V.

Added luster terminals to enable charging individual cells.

Attached the battery to the chargers and inverter again.

<table class="r" style="font-size:80%">
<tr><td>date time</td>
<td>U<sub style="font-size:75%">E</sub></td> <td>A<sub style="font-size:75%">E</sub></td>
<td>U<sub style="font-size:75%">S</sub></td> <td>A<sub style="font-size:75%">S</sub></td>
<td>V<sub style="font-size:75%">I</sub></td> <td>V<sub style="font-size:75%">B</sub></td> <td>kWh</td> <td>&Delta;E</td> <td>&Delta;S</td> <td>C</td></tr>
<tr><td>2021-10-20 17:40</td> <td>29.4</td> <td>-0.1</td> <td> 92.7</td> <td> 0.1</td> <td>26.7</td> <td>26.2</td> <td>120.1</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-10-21 08:50</td> <td>29.4</td> <td> 0.0</td> <td> 92.7</td> <td> 0.2</td> <td>26.4</td> <td>25.9</td> <td>120.8</td></tr>
<tr><td>2021-10-21 12:10</td> <td>29.5</td> <td> 0.6</td> <td> 92.8</td> <td> 4.0</td> <td>26.8</td> <td>26.1</td> <td>121.0</td></tr>
<tr><td>2021-10-21 23:10</td> <td>29.7</td> <td> 0.0</td> <td> 93.6</td> <td> 0.0</td> <td>26.4</td> <td>25.8</td> <td>121.4</td></tr>
<tr><td>2021-10-22 11:50</td> <td>29.7</td> <td> 0.3</td> <td> 93.6</td> <td> 0.5</td> <td>26.4</td> <td>25.7</td> <td>121.9</td></tr>
<tr><td>2021-10-22 24:00</td> <td>30.2</td> <td> 0.0</td> <td> 95.0</td> <td> 0.0</td> <td>26.5</td> <td>25.8</td> <td>123.2</td></tr>
<tr><td>2021-10-23 08:00</td> <td>30.2</td> <td> 0.0</td> <td> 95.0</td> <td> 0.0</td> <td>26.3</td> <td>25.6</td> <td>123.5</td></tr>
<tr><td>2021-10-23 12:00</td> <td>30.4</td> <td> 8.0</td> <td> 95.1</td> <td> 8.5</td> <td>26.9</td> <td>26.2</td> <td>123.9</td></tr>
<tr><td>2021-10-24 09:30</td> <td>30.9</td> <td> 0.0</td> <td> 96.4</td> <td> 0.0</td> <td>26.4</td> <td>25.7</td> <td>124.8</td></tr>
<tr><td>2021-10-24 12:10</td> <td>31.1</td> <td> 8.3</td> <td> 96.5</td> <td> 9.2</td> <td>27.1</td> <td>26.4</td> <td>125.1</td></tr>
<tr><td>2021-10-24 14:00</td> <td>31.5</td> <td> 5.6</td> <td> 97.1</td> <td>12.5</td> <td>27.3</td> <td>26.5</td> <td>125.3</td></tr>
<tr><td>2021-10-24 22:30</td> <td>31.6</td> <td> 0.0</td> <td> 97.5</td> <td> 0.0</td> <td>26.5</td> <td>25.8</td> <td>125.8</td></tr>
<tr><td>2021-10-25 09:00</td> <td>31.6</td> <td> 0.1</td> <td> 97.5</td> <td> 0.0</td> <td>26.4</td> <td>25.7</td> <td>126.2</td></tr>
<tr><td>2021-10-25 13:50</td> <td>32.1</td> <td> 5.6</td> <td> 98.1</td> <td>11.5</td> <td>27.2</td> <td>26.4</td> <td>126.7</td></tr>
<tr><td>2021-10-25 17:40</td> <td>32.2</td> <td> 0.0</td> <td> 98.5</td> <td> 0.1</td> <td>26.6</td> <td>25.9</td> <td>126.9</td></tr>
<tr><td>2021-10-26 08:40</td> <td>32.2</td> <td> 0.1</td> <td> 98.5</td> <td> 0.1</td> <td>26.2</td> <td>25.6</td> <td>128.1</td></tr>
<tr><td>2021-10-27 07:50</td> <td>32.4</td> <td> 0.0</td> <td> 98.9</td> <td> 0.0</td> <td>25.8</td> <td>25.2</td> <td>130.0</td></tr>
<tr><td>2021-10-27 16:10</td> <td>33.0</td> <td> 0.0</td> <td>100</td> <td> 9.1</td> <td>26.7</td> <td>26.0</td> <td>130.7</td></tr>
<tr><td>2021-10-27 18:30</td> <td>33.0</td> <td> 0.0</td> <td>100</td> <td> 0.0</td> <td>26.3</td> <td>25.6</td> <td>130.8</td></tr>
<tr><td>2021-10-28 08:00</td> <td>33.0</td> <td> 0.0</td> <td>100</td> <td> 0.0</td> <td>25.7</td> <td>25.3</td> <td>131.7</td></tr>
<tr><td>2021-10-28 12:20</td> <td>33.3</td> <td> 7.3</td> <td>101</td> <td>10.0</td> <td>26.5</td> <td>25.8</td> <td>132.2</td></tr>
<tr><td>2021-10-28 14:20</td> <td>33.6</td> <td> 4.6</td> <td>101</td> <td>12.3</td> <td>26.8</td> <td>26.1</td> <td>132.3</td></tr>
<tr><td>2021-10-28 16:10</td> <td>33.7</td> <td> 0.1</td> <td>102</td> <td> 9.1</td> <td>26.8</td> <td>26.0</td> <td>132.4</td></tr>
<tr><td>2021-10-28 20:00</td> <td>33.7</td> <td> 0.0</td> <td>102</td> <td> 0.0</td> <td>26.2</td> <td>25.5</td> <td>132.7</td></tr>
<tr><td>2021-10-29 11:30</td> <td>33.7</td> <td> 0.9</td> <td>102</td> <td> 1.9</td> <td>25.9</td> <td>25.2</td> <td>133.7</td></tr>
<tr><td>2021-10-29 12:30</td> <td>33.9</td> <td> 6.7</td> <td>102</td> <td> 9.2</td> <td>26.6</td> <td>25.9</td> <td>133.8</td></tr>
<tr><td>2021-10-29 14:10</td> <td>34.2</td> <td> 4.6</td> <td>103</td> <td>11.8</td> <td>26.8</td> <td>26.1</td> <td>133.9</td></tr>
<tr><td>2021-10-29 18:00</td> <td>34.3</td> <td> 0.0</td> <td>103</td> <td> 0.0</td> <td>26.3</td> <td>25.8</td> <td>134.3</td></tr>
<tr><td>2021-10-30 08:00</td> <td>34.3</td> <td> 0.0</td> <td>103</td> <td> 0.0</td> <td>&ndash;</td> <td>25.0</td> <td>&ndash;</td></tr>
</table>

2021-10-30 08:00: the central heating was running all night.
battery cells unbalanced again, and the bms started flickering on and off.
total voltage 25.0 V.
individual cell voltages:

1. 3.18
2. **2.65**
3. 3.18
4. 3.17
5. 3.22
6. 3.22
7. 3.24
8. 3.23

2021-10-31 20:30: after two day with no load, the battery is back up to 26.1 V, and all cells appear balanced at 3.27 V.

2021-11-02 20:30, 2021-11-03 17:30, 2021-11-05 12:00: two +  three more days with no load and little sunshine: 26.3 V, cells unbalanced at:

1. 3.29 3.30 3.32
2. 3.27 3.27 3.27
3. 3.28 3.28 3.32
4. 3.28 3.28 3.32
5. 3.31 3.31 3.34
6. 3.31 3.31 3.34
7. 3.31 3.31 3.34
8. 3.31 3.31 3.34

Strange... two blocks of four, it seems...

2021-11-06 08:00 bms: shut off again with inverter saying 25.3 V, presumably due to imbalanced cells.
anette was viting last night and sr=tayed the night and probably left her laptop plugged in, using more than expected.

2021-11-12 17:50: several foggy days.
i switched to mains overnight, or as soon as the inverter showed less than 26 V, corresponding to about 25.3 V, measured by voltmeter on the battery.
the battery continued charging, but very slowly, of course.
in the week nov. 5-12, the chargers report 2 +  5 = 7 kWh net gain, the consumption is 4.4 kWh, and the battery voltage rose from 25.4 to 24.7 V.
does that 0.3 V rise correspond to 2.6 kWh more energy stored?
or do we need to take a large loss of energy into account, consumed energy being much less than the energy produced by the chargers?
19:30: battery voltage is down to 26.0 V and 25.4 V, resp., and consumption up to 142.1, so only 0.2 kWh.
so it seems that the charger report  uch more power produced than we actually consume: 7 versus 4.6 kWh, 66% or only ca. efficiency.

2021-11-18: turned it on again on a sunny day after a series of very cloudy ones.
the battery was almost as low as when i stopped using solar power, even though the chargers report having generated some energy in the meantime.
turned it off again in the evening at 19:30.

2021-11-19: turned it on again at 08:40 for another sunny day.

2021-11-20 15:40 in full sunshine:
the inverter battery voltage 27.7 V, 26.7 at the bms battery poles, both panels were in full sunshine, east panels 80 V, south 91, yet both of them charging 0 A.
why do they both stop charging at a voltage below 28 V?

2021-11-21 17:40 turned off solar again after a completely foggy day with zero input.
we lasted only 24 hours, even though the battery was so full yesterday that the charger stopped charging.
we used only 1.2 kWh during that time... where are the 4.8 kWh that the battery is theoretically able to store?

2021-11-23 21:40 the sun shone quite a lot today, and i switched from mains back to solar quite early in the morning.

i compared my voltmeter with cbl.
mine seems to be consistently showing too low values, so all the V<sub style="font-size:75%">B</sub> measurements so far are wrong, too low, and the V<sub style="font-size:75%">I</sub> ones are correct.

2021-11-29 10:10 cbl turned off solar power last week wednesday ro thursday and the sun was away for several days.
today, and i switched from mains back to solar.
V<sub style="font-size:75%">B</sub> was 25.9 before turining on the inverter, 25.5 afterwards.

2021-12-02 18:20 been raining nonstop for a couple of days, inverter switched off.
starting to hook up cbl used panels directly to the battery.
measured the cells to check and potentially balance the bad one.

2021-12-03 10:40 sun is shining, finally switched from mains to pv again.

2021-12-15 Started attaching cbl used PV panels directly to the battery, in pairs, each providing 230 Wp, 4.7 A short circuit, 65.4 V open circuit, limited by the battery +  BMS +  inverter to 29 V, so they will never be able to provide more than max. 130 W per pair...

Monitoring individual cells; voltages until november were measured with my faulty voltmeter reporting too low values; from december onwards using cbl voltmeter; oh no, it does not measure with any precision below 0.1 V, so it makes little sense in this range:

2022-01-05 After disconneting the burned inverter and having no load for a while, the battery ought to be full, and over 28.8 V, and the BMS ought to be actively balancing.

<table class="r" style="font-size:80%">
<tr><td>date time</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>notes</td></tr>
<tr><td>2021-10-30 08:00</td><td>3.18</td><td><u><b>2.65</b></u></td><td>3.18</td><td>3.17</td><td>3.22</td><td>3.22</td><td>3.24</td><td>3.23</td><td>bms turned off</td></tr>
<tr><td>2021-10-31 20:30</td><td>3.27</td><td>3.27</td><td>3.27</td><td>3.27</td><td>3.27</td><td>3.27</td><td>3.27</td><td>3.27</td><td>after 2 days charging with no load</td></tr>
<tr><td>2021-11-02 20:30</td><td>3.29</td><td>3.27</td><td>3.28</td><td>3.28</td><td>3.31</td><td>3.31</td><td>3.31</td><td>3.31</td><td>cell 2 lags, cells 4-8 are ahead</td></tr>
<tr><td>2021-11-03 17:30</td><td>3.30</td><td>3.27</td><td>3.28</td><td>3.28</td><td>3.31</td><td>3.31</td><td>3.31</td><td>3.31</td></tr>
<tr><td>2021-11-05 12:00</td><td>3.32</td><td>3.27</td><td>3.32</td><td>3.32</td><td>3.34</td><td>3.34</td><td>3.34</td><td>3.34</td><td>during charging ca. 5 A</td></tr>
<tr><td>2021-12-02 18:20</td><td>3.25</td><td>3.19</td><td>3.24</td><td>3.21</td><td>3.27</td><td>3.27</td><td>3.27</td><td>3.26</td><td>not charging</td></tr>
<tr><td>2021-12-16 17:20</td><td>3.21</td><td>3.20</td><td>3.20</td><td>3.20</td><td>3.21</td><td>3.21</td><td>3.21</td><td>3.21</td><td>not charging</td></tr>
<tr><td>2021-12-16 19:20</td><td>3.20</td><td>3.18</td><td>3.20</td><td>3.20</td><td>3.20</td><td>3.20</td><td>3.20</td><td>3.20</td><td>after consuming ca. 0.3 kWh</td></tr>
<tr><td>2021-12-16 21:00</td><td>3.20</td><td>3.16</td><td>3.19</td><td>3.18</td><td>3.20</td><td>3.20</td><td>3.20</td><td>3.20</td><td>after consuming ca. 0.5 kWh</td></tr>
<tr><td>2022-01-05 14:00</td><td>3.32</td><td>3.32</td><td>3.32</td><td>3.32</td><td>3.77</td><td>3.77</td><td>3.64</td><td>3.33</td><td>bms stops charging further at 27.7 V</td></tr>
<tr><td>2022-01-06 08:00</td><td>3.30</td><td>3.30</td><td>3.30</td><td>3.30</td><td>3.30</td><td>3.30</td><td>3.30</td><td>3.30</td><td></td></tr>
</table>

On 2022-01-06, I disconnected the battery and started charging the individual cells.
The BMS manufacturer i-tecc states that the BMS will balance the cells above 28.8 V, so each individual cell ought to be at 3.51 V.

<table class="r" style="font-size:80%">
<tr><td>date time</td>
<td>U<sub style="font-size:75%">E</sub></td> <td>A<sub style="font-size:75%">E</sub></td>
<td>U<sub style="font-size:75%">S</sub></td> <td>A<sub style="font-size:75%">S</sub></td>
<td>V<sub style="font-size:75%">I</sub></td> <td>V<sub style="font-size:75%">B</sub></td> <td>kWh</td> <td>&Delta;E</td> <td>&Delta;S</td> <td>C</td></tr>
<tr><td>2021-10-31 20:30</td> <td>34.9</td> <td> 0.0</td> <td>104</td> <td> 0.0</td> <td>&ndash;</td> <td>26.1</td> <td>&ndash;</td></tr>
<tr><td>2021-11-02 20:30</td> <td>35.0</td> <td> 0.0</td> <td>105</td> <td> 0.0</td> <td>&ndash;</td> <td>26.3</td> <td>&ndash;</td></tr>
<tr><td>2021-11-03 17:30</td> <td>35.1</td> <td> 0.0</td> <td>105</td> <td> 0.0</td> <td>&ndash;</td> <td>26.3</td> <td>&ndash;</td></tr>
<tr><td>2021-11-04 19:50</td> <td>35.1</td> <td> 0.0</td> <td>105</td> <td> 0.0</td> <td>26.1</td> <td>25.5</td> <td>136.7</td></tr>
<tr><td>2021-11-05 08:40</td> <td>35.1</td> <td> 0.0</td> <td>105</td> <td> 0.1</td> <td>26.1</td> <td>25.4</td> <td>137.1</td></tr>
<tr><td>2021-11-05 12:00</td> <td>35.1</td> <td> 3.0</td> <td>105</td> <td> 4.9</td> <td>26.5</td> <td>25.7</td> <td>137.2</td></tr>
<tr><td>2021-11-05 18:00</td> <td>35.3</td> <td> 0.0</td> <td>105</td> <td> 0.0</td> <td>26.2</td> <td>25.4</td> <td>137.5</td></tr>
<tr><td>2021-11-12 17:50</td> <td>37.3</td> <td> 0.0</td> <td>110</td> <td> 0.0</td> <td>26.4</td> <td>25.7</td> <td>141.9</td></tr>
<tr><td>2021-11-12 19:30</td> <td>37.3</td> <td> 0.0</td> <td>110</td> <td> 0.0</td> <td>26.0</td> <td>25.4</td> <td>142.1</td></tr>
<tr><td>2021-11-18 08:40</td> <td>37.4</td> <td> 0.1</td> <td>110</td> <td> 0.1</td> <td>26.3</td> <td>    </td> <td>142.1</td></tr>
<tr><td>2021-11-18 16:00</td> <td>37.8</td> <td> 0.0</td> <td>111</td> <td> 0.3</td> <td>26.6</td> <td>25.9</td> <td>142.4</td></tr>
<tr><td>2021-11-18 18:40</td> <td>37.8</td> <td> 0.0</td> <td>111</td> <td> 0.0</td> <td>26.4</td> <td>25.7</td> <td>142.5</td></tr>
<tr><td>2021-11-19 08:40</td> <td>37.8</td> <td> 0.0</td> <td>111</td> <td> 0.0</td> <td>26.6</td> <td>25.9</td> <td>142.6</td></tr>
<tr><td>2021-11-19 10:40</td> <td>37.8</td> <td> 2.3</td> <td>111</td> <td> 0.3</td> <td>26.7</td> <td>25.8</td> <td>142.7</td></tr>
<tr><td>2021-11-19 19:30</td> <td>38.2</td> <td> 0.0</td> <td>112</td> <td> 0.0</td> <td>26.6</td> <td>25.8</td> <td>142.9</td></tr>
<tr><td>2021-11-20 10:40</td> <td>38.2</td> <td> 0.3</td> <td>112</td> <td> 0.6</td> <td>26.7</td> <td>25.9</td> <td>143.0</td></tr>
<tr><td>2021-11-20 15:40</td> <td>38.3</td> <td> 0.0</td> <td>112</td> <td> 0.0</td> <td>27.7</td> <td>26.7</td> <td>143.1</td></tr>
<tr><td>2021-11-20 18:40</td> <td>38.3</td> <td> 0.0</td> <td>112</td> <td> 0.6</td> <td>26.5</td> <td>25.8</td> <td>143.3</td></tr>
<tr><td>2021-11-21 09:20</td> <td>38.3</td> <td> 0.1</td> <td>112</td> <td> 0.2</td> <td>26.5</td> <td>25.7</td> <td>143.8</td></tr>
<tr><td>2021-11-21 17:40</td> <td>38.3</td> <td> 0.0</td> <td>112</td> <td> 0.2</td> <td>26.2</td> <td>25.5</td> <td>144.4</td></tr>
<tr><td>2021-11-23 15:20</td> <td>38.7</td> <td> 0.0</td> <td>113</td> <td> 0.3</td> <td>26.9</td> <td>26.1</td> <td>144.5</td></tr>
<tr><td>2021-11-23 21:40</td> <td>38.7</td> <td> 0.0</td> <td>113</td> <td> 0.0</td> <td>26.5</td> <td>25.7</td> <td>144.9</td></tr>
<tr><td>2021-11-24 05:40</td> <td>38.7</td> <td> 0.0</td> <td>113</td> <td> 0.0</td> <td>26.4</td> <td>25.7</td> <td>145.1</td></tr>
<tr><td>2021-11-24 11:00</td> <td>38.7</td> <td> 0.1</td> <td>113</td> <td> 0.4</td> <td>26.4</td> <td>25.7</td> <td>145.3</td></tr>
<tr><td>2021-11-29 10:10</td> <td>    </td> <td>    </td> <td>   </td> <td>    </td> <td>    </td> <td>*25.9</td> <td>     </td></tr>
<tr><td>2021-11-29 10:10</td> <td>38.9</td> <td> 0.4</td> <td>114</td> <td> 0.5</td> <td>26.2</td> <td>25.5</td> <td>147.2</td></tr>
<tr><td>2021-11-29 11:10</td> <td>38.9</td> <td> 0.6</td> <td>114</td> <td> 0.7</td> <td>25.8</td> <td>25.0</td> <td>147.3</td></tr>
<tr><td>2021-11-30 15:00</td> <td>38.9</td> <td> 0.0</td> <td>114</td> <td> 0.0</td> <td>25.8</td> <td>25.1</td> <td>147.4</td></tr>
<tr><td>2021-12-01 17:00</td> <td>    </td> <td>    </td> <td>   </td> <td>    </td> <td>    </td> <td>25.8</td> <td>     </td></tr>
<tr><td>2021-12-02 18:20</td> <td>    </td> <td>    </td> <td>   </td> <td>    </td> <td>    </td> <td>25.9</td> <td>     </td></tr>
<tr><td>2021-12-03 10:40</td> <td>39.0</td> <td> 0.8</td> <td>114</td> <td> 0.7</td> <td>26.3</td> <td>25.6</td> <td>147.4</td></tr>
<tr><td>2021-12-03 18:40</td> <td>39.3</td> <td> 0.0</td> <td>114</td> <td> 0.8</td> <td>26.2</td> <td>25.5</td> <td>147.6</td></tr>
<tr><td>2021-12-07 10:50</td> <td>    </td> <td>    </td> <td>   </td> <td>    </td> <td>    </td> <td>26.3</td> <td>     </td></tr>
<tr><td>2021-12-07 11:00</td> <td>39.4</td> <td> 0.7</td> <td>115</td> <td> 0.2</td> <td>26.6</td> <td>25.8</td> <td>147.6</td></tr>
<tr><td>2021-12-07 20:00</td> <td>39.7</td> <td> 0.0</td> <td>115</td> <td> 0.0</td> <td>26.1</td> <td>25.5</td> <td>148.3</td></tr>
<tr><td>2021-12-12 10:10</td> <td>    </td> <td>    </td> <td>   </td> <td>    </td> <td>    </td> <td>26.5</td> <td>     </td></tr>
<tr><td>2021-12-12 10:20</td> <td>39.8</td> <td> 1.7</td> <td>116</td> <td> 2.2</td> <td>26.1</td> <td>26.0</td> <td>148.3</td></tr>
<tr><td>2021-12-13 10:00</td> <td>    </td> <td>    </td> <td>   </td> <td>    </td> <td>    </td> <td>26.3</td> <td>     </td></tr>
<tr><td>2021-12-13 10:10</td> <td>39.9</td> <td> 1.1</td> <td>116</td> <td> 0.9</td> <td>26.6</td> <td>25.8</td> <td>148.7</td></tr>
<tr><td>2021-12-13 14:00</td> <td>40.3</td> <td> 0.4</td> <td>116</td> <td> 2.5</td> <td>26.8</td> <td>26.0</td> <td>148.8</td></tr>
<tr><td>2021-12-13 18:10</td> <td>40.3</td> <td> 0.0</td> <td>117</td> <td> 0.0</td> <td>26.5</td> <td>25.8</td> <td>149.1</td></tr>
<tr><td>2021-12-14 06:40</td> <td>40.3</td> <td> 0.0</td> <td>117</td> <td> 0.0</td> <td>26.3</td> <td>25.5</td> <td>149.7</td></tr>
<tr><td>2021-12-14 22:20</td> <td>40.6</td> <td> 0.0</td> <td>117</td> <td> 0.0</td> <td>26.3</td> <td>25.6</td> <td>150.4</td></tr>
<tr><td>2021-12-16 09:50</td> <td>40.6</td> <td> 0.1</td> <td>117</td> <td> 0.3</td> <td>26.4</td> <td>26.0</td> <td>150.6</td></tr>
<tr><td>2021-12-16 17:10</td> <td>40.6</td> <td> 0.0</td> <td>118</td> <td> 0.0</td> <td>26.1</td> <td>25.7</td> <td>150.8</td></tr>
<tr><td>2021-12-16 19:20</td> <td>40.6</td> <td> 0.0</td> <td>118</td> <td> 0.0</td> <td>25.9</td> <td>25.5</td> <td>151.1</td></tr>
<tr><td>2021-12-16 20:50</td> <td>40.6</td> <td> 0.0</td> <td>118</td> <td> 0.0</td> <td>26.0</td> <td>25.5</td> <td>151.3</td></tr>
<tr><td>2021-12-17 10:30</td> <td>40.6</td> <td> 0.0</td> <td>118</td> <td> 0.2</td> <td>26.3</td> <td>25.8</td> <td>151.4</td></tr>
<tr><td>2021-12-17 20:20</td> <td>40.7</td> <td> 0.0</td> <td>118</td> <td> 0.0</td> <td>25.7</td> <td>25.2</td> <td>151.9</td></tr>
<tr><td>2021-12-18 08:40</td> <td>40.7</td> <td> 0.0</td> <td>118</td> <td> 0.0</td> <td>26.1</td> <td>25.6</td> <td>151.9</td></tr>
<tr><td>2021-12-18 12:50</td> <td>40.9</td> <td> 4.4</td> <td>118</td> <td> 9.8</td> <td>27.0</td> <td>26.4</td> <td>152.1</td></tr>
</table>

2022-01-19: hooked up the new balancer. beforehand, battery cell voltages were 3.3, 3.3, 3.3, 3.3, 3.3, 3.34, 3.3, 3.3.
total compumption so far 152.8 kWh.

2022-01-28: installed the new PUGU inverter and started using solar power again.
before connecting the inverter, the battery cells seemed extremely badly balanced in spite of the active balancer connected, with #3 very high and #4 very low.
total voltage started out at 28.2 V and rapidly dimished.
after a couple of minutes of use they evened out somewhat: 3.32, 3.32, 3.44, 3.29, 3.29, 3.31, 3.31, total voltage 27.7 V, total kWh consumption at 152.8.

2022-01-29 20:10: 153.3 kWh, V<sub style="font-size:75%">I</sub> 27.1 V; inverter failed and switched off at 01:00 o'clock in the night.

2022-01-30 10:10: sunshine, 153.8 kWh, V<sub style="font-size:75%">I</sub> 27.9 V

2022-01-30 18:10: dark, 153.9 kWh, V<sub style="font-size:75%">I</sub> 27.3 V,
V<sub style="font-size:75%">S</sub> 26.3 V, 120 kWh,
V<sub style="font-size:75%">E</sub> 26.4 V, 41.9 kWh

2022-01-31 10:40: very cloudy, 154.0 kWh, V<sub style="font-size:75%">I</sub> 26.4 V,
V<sub style="font-size:75%">S</sub> 26.6 V, 121 kWh,
V<sub style="font-size:75%">E</sub> 26.7 V, 42.0 kWh,
bms blocking intermittently, 3.31, 3.31, 3.30, 3.30, 3.49, 3.31, 3.31, 3.31
balancer is not working!
five minutes later, things look ok, bms unblocked, inverter works again...

2022-02-03 13:20: new daly bms installed, balancer and i-tecc bms removed, up and running again.
C 154.0 kWh, Vb 26.4, all cells at 3.3 V;
<br/>22:00 154.4 kWh 26.3 Vs

2022-02-04 08:40: hooked up east epever charger again; C 154.7 kWh, E 42.1 kWh 26.3 V, S 121 kWh 26.1 V

2022-02-05 14:30: rover charger installed, sunny: C 155.5 kWh, E 42.6 kWh 29.1 V, -0.1 A, S 122 kWh 29.0 V 0.7 A, V 28.7 V 40 V 7.5 A 30 Ah;
17:50 C 155.7 E 42.6 26.5 S 122 26.4 V 26.2V 33 Ah

2022-02-06 10:50: C 156.5 E 42.6 26.7 S 122 26.6 V 26.4V  5 Ah

2022-02-07 17:20: C 157.8 E 43.2 26.5 S 123 26.4 V 26.3V 45 Ah: kWh diff: C 1.3 E 0.4 S 1.0 V 1.0

2022-02-08 03:30: C 158.2 E 43.2 26.5 S 123 26.4 V 26.3V 45 Ah

2022-02-08 07:20: C 158.3 E 43.2 26.4 S 123 26.3 V 26.2V 45 Ah

2022-02-08 12:20: C 158.6 E 43.6 27.5V 7A S 124 28.8V 5.4A V 27.2V 11Ah

2022-02-08 20:00: C 159.1 E 43.6 26.5V 0A S 124 26.4V 0.0A V 26.2V 23Ah

2022-02-09 12:40: C 160.4 before running washing machine for the first time in full sunshine:
it uses ca. 2100 W for some short periods of time;
battery fully loaded with 29V before starting, suddenly sinking to 25.5V when fully loaded;
charging during run: E 76V 1.3A 25.6V 3A S 44V 10A 25.3V V 63V 4.7A 26.7V 12A

2022-02-09 19:30: C 161.5 E 44.3 26.4V 0A S 125 26.3V 0.0A V 26.1V 47Ah; diff: C 2.4 E 0.7 S 1 V 1.2 sum 2.9

2022-02-10 midday: C 162.9 before running washing machine with a 60 degree load for the second time in full sunshine:
battery not fully loaded before starting, but pretty full, suddenly sinking from ca. 27V to ca. 26V;
charging during run: E 26.2V 6.8A S 27.1V 10.7A V 47V 13A
C 164.1 after washing run.

2022-02-10 18:20: C 164.4 E 45.0 26.5V -0.1A S 126 26.4V 0.0A V 26.2V 49Ah; diff: C 2.9 E 0.7 S 1 V 1.2 sum 0.7 +  1 +  1.2 = 2.9

2022-02-11 08:40: C 164.4 E 45.0 26.5V -0.1A S 126 26.4V 0.0A V 26.2V 49Ah; diff: C 2.9 E 0.7 S 1 V 1.2 sum 0.7 +  1 +  1.2 = 2.9

2022-02-11 midday: C 165.7 before; power 1900 W; data from V: 13Ah before, battery voltage 27.1 reduced to 25.8, PV 46V 15A.
C 16?.? after washing run.

2022-02-15 late evening: after two rainy cloudy days, the BMS blocked and switched off; i switcherd off the inverter; the battery pole voltage was 24.4V afterwards

2022-02-16 midmorning: still very dark, rainy and cloudy; after charging very slightly, i turned on the inverter again; that worked for a while, but switched on and off repeatedly when i turned on a bright light using 60W.
battery cell voltages were 3.22, 3.22, 3.19, 2.95, 3.21, 3.22, 3.21.
power so far: C = 174.2 kWh.

2022-02-17 12:50 inverter still switched off, gradually loading;
cell voltages: 3.25, 3.25, 3.21, 3.16, 3.25, 3.26, 3.26, 3.26.

2022-02-18 08:20 inverter still switched off, loading and balancing;
cell voltages: 3.27, 3.27, 3.24, 3.20, 3.27, 3.27, 3.27, 3.27;
chargers report E 26.3V, S 26.2V, V 26.0V.
voltmeter agrees with charger V on 26V.
according to the [voltage chart](#batteries), this corresponds to ca. 50% SOC of the battery and most cells, and only 20% SOC for cell #4, after two days loading with overcast sky and no load.

2022-02-18 12:00 inverter still switched off, loading and balancing in a sunny moment,
full sunshine producing ca. 900W;
chargers:
E 47.3 kWh, 70V, 3A, 27.3V, 7.8A, 210W;
S 130 kWh, 73V, 4A, 28.5V, 10.3A, 290W;
V 44V, 10A, 27.0V, 14Ah, 440W;
cell voltages: 3.35, 3.33, 3.33, 3.32, 3.32, 3.34, 3.39, 3.50;
all of them over 80% except the last at 99%;
pretty weird, #4 jumping from 20% to 80% in just three hours;
still waiting to see whether they will balance out more;

2022-02-18 14:00 inverter still switched off, loading and balancing, cloudy, producing ca. 460W:
chargers:
E 47.5 kWh, 70V, 0.8A, 27.0V, 2A, 54W;
S 130 kWh, 75V, 1.6A, 28.4V, 4A, 110W;
V 44V, 7A, 26.7V, 32Ah, 300W;
cell voltages: 3.33, 3.31, 3.31, 3.30, 3.31, 3.33, 3.34, 3.38;
all of them between 70-80% except the last at 99%;

2022-02-18 16:30 inverter still switched off, loading and balancing, sun setting, producing ca. 80W:
chargers:
E 47.5 kWh, 29V, 0.1A, 26.8V, -0A, 2W;
S 130 kWh, 30V, 0.5A, 28.1V, 0.6A, 14W;
V 41V, 1.8A, 26.5V, 40Ah, 70W;
cell voltages: 3.32, 3.32, 3.29, 3.30, 3.29, 3.32, 3.33, 3.34;
all of them between 65-90%;

2022-02-18 22:10 inverter still switched off, resting and settling at 26.35 V SOC ca. 45-50% with
cell voltages: 3.30, 3.30, 3.28, 3.27, 3.30, 3.30, 3.30, 3.30;
all around 70%, except #3 and #4 under 50%.

2022-02-19 12:50 inverter still switched off, sunny, producing ca. 0W,
chargers refusing to charge:
cell voltages: 3.38, 3.37, 3.33, 3.33, 3.63, 3.47, 3.42, 3.47;
all of them over 96%;

2022-02-19 13:00 turned on inverter, sunny, producing ca. 70W,
chargers:
E 47.9 kWh, 87V, 0.0A, 29.1V, -0.1A, 0W;
S 131 kWh, 89V, 0.0A, 29.0V, 0.0A, 0W;
V 60V, 1.2A, 27.5V, 70W;
cell voltages: 3.36, 3.36, 3.33, 3.31, 3.40, 3.39, 3.26, 3.15 = 26.2;
this was measured while the discharge load was varying...

2022-02-19 19:20 inverter ran this sunny afternoon;
chargers:
E 26.4V, 47.9 kWh, S 26.3V, 131 kWh, V 26.1V, 37 Ah
cell voltages: 3.28 +  3.28 +  3.28 +  3.28 +  3.28 +  3.28 +  3.27 +  3.25 = 26.2;
battery overall and all cells at ca. 50% except #7 at 40% and #8 at 30%;
C 174.7 kWh.

2022-02-19 22:20 C 174.9 E 26.5V, V 26.2V --> battery voltage 26.3V SOC ca. 55%.

2022-02-20 08:30 C 175.4 E 26.3V, V 26.0V --> battery voltage 26.1V SOC ca. 40%.

2022-02-20 20:30 C 176.3 E 48kWh 26.2V, S 131kWh V 12Ah

2022-02-20 22:30 C 176.6 E 26.1V, V 25.9V, SOC ca. 30%

2022-02-21 09:50 C 177.2, charging at 140W,
E 48.0 kWh, 28V, 0.8A, 26.2V,  0.8A, 20W;
S 131 kWh, 30V, 0.6A, 27.5V, 0.5A, 13W;
V 44V, 2.5A, 25.9V, 2Ah, 110W;
cell voltages: 3.25 + 3.25 + 3.23 + 3.20 + 3.24 + 3.25 + 3.25 + 3.26 = 25.93, ca 26% SOC.

2022-02-21 18:44 C 177.8, discharging,
E 48.1 kWh,  0V, -0.0A, 26.0V, -0.0A,  0W;
S 131 kWh,  0V, 0.0A, 25.9V, 0.0A,  0W;
V  0V, 0.0A, 25.7V, 23Ah,   0W;
cell voltages: 3.23 + 3.23 + 3.21 + 3.19 + 3.23 + 3.23 + 3.22 + 3.21 = 25.75, ca 20% SOC.

2022-02-21 switched off the inverter in the evening

2022-02-22 switched on the inverter in the morning;
in the evening, at 19:30, he have C 178.5 kWh,
E 48.5 kWh,  0V, -0.0A, 26.0V, -0.0A,  0W;
S 132 kWh,  0V, 0.0A, 25.7V, 0.0A,  0W;
V  0V, 0.0A, 25.8V, 43Ah,   0W;
cell voltages: 3.24 + 3.24 + 3.24 + 3.24 + 3.24 + 3.24 + 3.23 + 3.21 = 25.88, ca 25% SOC.

2022-02-23 switched on the inverter in the morning;
in the evening, at 19:30, he have C 179.7 kWh,
E 48.7 kWh,  0V, -0.0A, 26.3V, -0.0A,  0W;
S 132 kWh,  0V, 0.0A, 26.2V, 0.0A,  0W;
V  0V, 0.0A, 26.0V, 34Ah,   0W;
switched off again.

2022-02-24 switched on the inverter this morning;
in the evening, at 21:40, C 180.3 kWh,
E 49.1 kWh,  0V, -0.0A, 26.4V, -0.0A,  0W;
S 133 kWh,  0V, 0.0A, 26.3V, 0.0A,  0W;
V  0V, 0.0A, 26.1V, 41Ah,   0W;
left it on for now...

2022-02-26 13:50 inverter still running non-stop, sunny, starting a 40 degree washing machine load;
before C 182.7 kWh,
E 50.1 kWh, 40V,  1.2A, 26.6V,  0.1A,  0W;
S 133 kWh, 84V, 1.1A, 28.9V, 1.5A,  0W;
V 53V, 0.0A, 26.9V, 42Ah,   0W;
cell voltages: 3.35 + 3.35 + 3.35 + 3.35 + 3.65 + 3.50 + 3.42 + 3.36 = 27.33

2022-02-26 14:10 with the washing machine drawing over 2kW, and a total of 1270W coming in from PV, the battery voltage report drops to:
E 50.1 kWh, 73V,  1.9A, 25.6V,  5.4A, 130W;
S 133 kWh, 72V, 5.3A, 26.3V, 14.5A, 380W;
V 45V,  17A, 25.4V, 45Ah, 760W;
cell voltages: 3.16 + 3.22 + 3.23 + 3.25 + 3.23 + 3.21 + 3.10 + 2.96 = 25.35

2022-02-27 14:40 inverter still running non-stop, sunny, with another 40 degree washing machine run drawing 2kW and a total of 1kW coming in, the battery voltage report drops to:
E 50.6 kWh, 72V,  1.1A, 25.1V,  3.0A,  75W;
S 134 kWh, 73V, 4.9A, 26.3V, 13.5A, 355W;
V 45V,  13A, 25.0V, 62Ah, 570W;
cell voltages: 3.10 + 3.20 + 3.22 + 3.22 + 3.22 + 3.19 + 3.00 + 2.80 = 24.95

2022-02-28 09:30 inverter still running non-stop, sunny, just rising, 50W input, C 186.8 kWh,
E 50.7 kWh, 28V,  0.2A, 26.2V,  0.2A,   5W;
S 135 kWh, 28V, 0.2A, 26.3V,  0.2A,   5W;
V 39V,   1A, 25.9V,  0Ah,  40W;
cell voltages: 3.25 + 3.24 + 3.24 + 3.24 + 3.24 + 3.25 + 3.24 + 3.23 = 25.93

2022-02-28 18:30 inverter still running non-stop, sunny, C 188.4 kWh,
E 51.5 kWh, 26V,  0.0A, 26.2V,  0.0A,   0W;
S 135 kWh, 28V, 0.0A, 26.3V,  0.0A,   0W;
V 18V,   0A, 26.1V, 66Ah,   0W;
cell voltages: 3.27 + 3.28 + 3.28 + 3.28 + 3.28 + 3.27 + 3.25 + 3.24 = 26.15

2022-03-01 08:50 inverter still running non-stop, sunny, C 189.7 kWh,
E 51.5 kWh, 28V,  0.0A, 26.1V,  0.0A,   0W;
S 135 kWh, 28V, 0.1A, 26.1V,  0.1A,   2W;
V 34V, 0.2A, 25.8V,  0Ah,   0W;
in 4 days february 25-28 we produced and consumed 189.7 - 180.3 = 9.4 kWh

2022-03-03 08:30 inverter still running non-stop, sunny, C 193.6 kWh,
E 52.7 kWh, 28V,  0.1A, 26.1V,  0.1A,   0W;
S 136 kWh, 28V, 0.1A, 26.1V,  0.1A,   2W;
V 30V, 0.3A, 25.8V,  1Ah,   0W;
cell voltages: 3.24 + 3.24 + 3.24 + 3.24 + 3.24 + 3.24 + 3.24 + 3.23 = 25.91

2022-03-03 the south-facing epever tracer died; maybe due to too high current;
its max rating is 10A, and the 4x100Wp panels may have provided up to 400W / 25V = 16A.
i was still able to complete a 60 degree washing machine without it.

2022-03-04 inverter still running non-stop, sunny, ran another washing machine at 40 degrees;
C 197.3 kWh in the evening with a voltage around 26.1V according to V.

2022-03-05 inverter still running smoothly non-stop, sunny;
C 198 kWh in the morning with a voltage around 25.9V according to V.
disconnected the broken S epever tracer charger

2022-03-10 18:40 inverter still running smoothly non-stop, sunny every day;
cornelius washed three timnes in the oast few days, we washed once today;
C 208.3 kWh with a voltage around 26.2V according to V.
E 58.9 kWh;
disconnected to hook up the new rnogy rover 20A charger for the S panels

2022-03-12 14:30 inverter still running smoothly; sunny; 
added the renogy rover 20a charge controller for the south-facing panels;
C 209.9 kWh before starting washing machine;
E 59.6 kWh, 85V,  0.1A, 25.5V,  2.0A, 50W;
S 70V, 12A, 25.4V,  1Ah, 840W;
V 54V, 8.5A, 28.7V,  4Ah, 450W;

2022-03-19 17:20 inverter still running smoothly; sunny;
C 221.9 kWh;
E 62.6 kWh, 83V,  0.0A, 29.0V, -0.1A,  0W;
S 86V,  0A, 28.9V, 14Ah,   0W;
V 53V, 1.4A, 28.7V, 30Ah,   0W;
cell voltages: 3.41 + 3.31 + 3.31 + 3.31 + 3.62 + 3.65 + 3.32 + 3.32 = 27.25

2022-03-20 12:30 inverter still running smoothly, sunny, washing machine starting up;
C 224 kWh, 1065W currently being generated;
E 63.2 kWh, 79V,  2.0A, 25.8V,  7.2A, 185W;
S 70V, 13A, 25.7V, 13Ah, 330W;
V 42V, 20.6A, 26.9V, 36Ah, 550W before washing dust off the panels;
V 43V, 21.7A, 27.3V, 40Ah, 590W after washing dust off the panels;

2022-04-01 20:00 inverter running smoothly but battery low after two dreary and very rainy days;
C 250 kWh;
E 70.2 kWh, 26V,  0.0A, 26.0V, -0.0A,   0W;
S 26V,  0A, 25.9V, 12Ah,   0W;
V 22V, 20.6A, 25.7V, 26Ah,   0W;

2022-04-06 12:30 inverter running smoothly, quite cloudy, trying to run the washing machine anyway:
C 257.8 kWh before;
E 72.2 kWh, 76V,  1.4A, 27.5V,  3.6A,   0W;
S 74V,  6A, 27.4V, 11Ah,   0W;
V 42V, 11.0A, 27.3V, 23Ah,   0W;
during washing with 2kW load, battery voltage drops to 24.5V;

2022-04-11 11:00 inverter running smoothly, sunny, before running the washing machine:
C 266 kWh before;
E 74.1 kWh, 68V,  3.2A, 27.4V,  8.9A,   0W;
S 83V,  2A, 27.2V,  2Ah,   0W;
V 44V,  4.0A, 27.1V,  6Ah,   0W;
during washing with 2kW load, battery voltage drops to 24.6V;

2022-04-13 yesterday, i installed the hot water boiler.
today was sunny and the battery pretty full, so i turned on one 650 W heating element, and for a while even two.
after one day, the boiler consumed 4.7 kWh, and our total PV consumption jumped to 275 kWh.
the boiler is now over 25 degrees.
according to the [calculator](https://www.omnicalculator.com/physics/water-heating),
it will require ca. 10.5 kWh more to reach 55 degrees, which will take 17 more sunny hours at 650W.
that may be achievable in two or three days.
at their maximum, the chargers were producing ca. E 6, S 13, V 22 = 40 A 
E 76.5 kWh, 29V,  0.2A, 26.9V,  0.2A,   0W;
S 72V, 1.3A, 26.7V, 68Ah,   0W;
V 42V,  2.3A, 26.6V, 114Ah,   0W;
so, the S+V chargers report 182Ah * 24V = 4368 Wh produced today.

2022-04-14 sunny day and charging the boiler.
C = 277.4 kWh at 12:40.
amperes coming on from the chargers E/S/V/total:
12:40 8.5 + 12 + 15 = 35.5 = 852W
13:30 7.7 + 13.2 + 21.4 = 42.3 = 1015W
16:00 a = 2.2 + 12.2 + 16 = 30.4 = 730W
16:20 a = 0.7 + 11.7 + 15.5 = 27.9 = 669W
17:20 a = 0.3 +  3.2 +  7.5 = 11.0 = 264W
17:20 consumption so far: total C 280.8, boiler B 9.0 kWh, temperature ca. 34 degrees.
E 77.8 kWh, 29V,  0.2A, 26.9V,  0.3A,   0W;
S 49V, 1.8A, 26.7V, 67Ah,   0W;
V 42V,  6.7A, 26.6V, 107Ah,   0W;
so, the S+V chargers report 174Ah * 24V = 4176 Wh produced today, E = 77.8-76.5 = 1.3kWh, total 5.4 kWh.
C increased by 280.8-275 = 5.8 kWh. weird, where is the loss?

2022-04-17 18:30 after two previous days feeding the boiler and
today one sunny day with one washing machine load and no boiler, sun gone from the panels, battry fully charged:
C = 294.3 kWh,
E 81.3 kWh 29.1V,
S 73 Ah = 1.75 kWh 28.9V,
V 110 Ah = 2.64 kWh 28.8V;
cell voltages: 3.35 + 3.31 + 3.31 + 3.31 + 3.58 + 3.48 + 3.31 + 3.31 = 26.96

2022-04-18 08:50 after one night's gentle discharging:
C = 295.2 kWh,
E 81.3 kWh 26.3V,
S 1 Ah 26.1V,
V 0 Ah 26.0V;
cell voltages: 3.27 + 3.27 + 3.26 + 3.24 + 3.27 + 3.26 + 3.25 + 3.27 = 26.09

2022-04-27 14:10 sunny and cloudy alternating, charged the boiler with 600W for two hours, now switched to 1200W.
B = 34.9 kWh
C = 327.6 kWh,
E 90.1 kWh 26.7V 8A,
S 25 Ah 25.1V 5A,
V 44 Ah 25.0V 11A;

2022-04-28 12:10 sunny. voltages before and after switching on 600W boiler:
B = 36.6 kWh
C = 330.6 kWh,
E 91.0 kWh 28.1/27.1V 8A,
S  6 Ah 27.9/27.0V 11A,
V 11 Ah 27.7/26.8V  8A;

2022-04-28 14:10 very sunny. voltages before and after switching boiler from 600W to 1.2kW:
B = 37.8 kWh
C = 331.9 kWh,
E 91.4 kWh 29.0V 6A / 26.8V 6A,
S 25 Ah 29.0V  0A / 26.6V 14A,
V 43 Ah 29.0V 20A / 26.5V 25A;

2022-04-28 16:30 very sunny. voltages before and after switching boiler from 1260W to 600W:
B = 38.8 kWh
C = 335.1 kWh,
E 91.7 kWh 25.6V 0.3A / 26.5V 0.3A,
S 60 Ah 25.5V 13A / 26.5V 12A,
V 95 Ah 25.3V 16A / 26.3V 16A;

2022-04-28 17:20 sun going behind roof ridge. voltages before and after switching off boiler from 632W:
B = 41.4 kWh
C = 335.7 kWh,
E 91.7 kWh 26.0V 0.1A / 26.8V 0.0A,
S 60 Ah 26.0V  7A / 26.6V  2A,
V 95 Ah 25.8V  7A / 26.5V  7A;

2022-05-18 12:10: the walnut tree has developed its leaves and shadows the S and V panels totally until noon.
B = 77.4 kWh
C = 398.1 kWh,
E 110 kWh 65.0V 3.8A / 27.8V 8.6A,
S  4 Ah 49V / 27.7V  8A,
V 95 Ah 41V / 27.5V  2A;

2022-06-04 14:20 back from a week-long break, sunny day, second washing machine load for today:
B 92.1
C 431.7
E 122 kWh 28.0V 2.9A / 25.2V 4.2A,
S 23 Ah 64V / 24.9V 14A,
V 25 Ah 34V / 24.8V 23A;

2022-06-04 14:50 run in boiler 600W
B 92.1
C 431.7
E 122 kWh 81.0V 0.0A / 27.1V -0.1A,
S 26 Ah 65V / 27.1V 12A,
V 30 Ah 31V / 27.1V 20A;

2022-06-21 ca. 17:00 my entire PV installation shelf fell off the wall, ripping out the plugs from the brickwork;
everything fell down 3 metres onto the wooden stairs: battery cells, bms, inverter, three chargers.

2022-06-23 18:00 all systems go again, with only the V panels and charger running so far;
B 116.3
C 480.4
E 139 kWh  0.0V 0.0A / 26.4V -0.1A,
S  0Ah  0V / 26.3V  0A,
V  0Ah 34V / 26.1V  1A;

2022-07-22 17:20 after a month full of sun and the boiler running most days, it never quite reached 50 degrees,
and the gas consumption did not niticeable decrease in spite of that;
111 kWh generated in 35 days, 40 used by boiler, 70 kWh by moniwonig;
B 166.8
C 571.7
E 169 kWh 29.0V 0.3A / 27.0V  0.2A,
S 48Ah 35V / 26.9V  4.6A,
V 91Ah 35V / 26.7V  8.6A;
