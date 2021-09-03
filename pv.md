# <a name="top"></a>PV solar power photovoltaik

#### Table of Contents

<div id="toc"></div>

## Components

- Solar panel
- Solar charge controller eur 100
- Battery: 4 x 3V 280 Ah
- Battery management system BMS ca. eur 500
- Inverter: co has a good one for eur 400

## Links

- [DIY Off Grid Solar Charge Controllers](https://www.mobile-solarpower.com/solar-charge-controllers.html)
- [DIY solar electric projects forum](https://diysolarforum.com)
- [Battery](https://www.aliexpress.com/item/4001217714484.html)
- [Laderegler solar charger](https://www.amazon.de/EPEVER-Solarladeregler-Solarmodul-automatisch-identifizieren/dp/B071GRK4J8/ref=sr_1_1_sspa)
- The solar panel providing 100 Watt at 12 V will generate less current than 10 A at 12 V, so 2.5 mm diameter wire is sufficient for each individual panel;
more precisely: Pmax 100 Watt, Vpmax 17.8 Volt, Ipmax 5.62 Ampere

## Consumption

### Treppenlicht

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

Main consumer is [Moni's fridge](/j/doc/hardware/manual/bomann_kuehlschrank/EU_Datenblatt_KG_185.pdf):
it uses 0.522 kWh per day, 190 kWh per year.

2021-04-07 18:00 started monitoring fridge electricity consumption
using [Pearl SD-2209-675](https://www.pearl.de/a-SD2209-3102.shtml), originally [revolt  SD-2209-675](https://www.revolt-power.de/Digitaler-Energiekostenmesser-Stromverbrauchszaeh-SD-2209-919.shtml).

<!-- Drücken Sie wiederholt auf die Mode-Taste, um durch die Einstellungen zu wechseln: W - V - Total KWh - Total € - € KWh. (Leistung, Spannung, Energieverbrauch insgesamt, Kosten insgesamt, eingestellter Strompreis pro Kilowattstunde) Drücken Sie lange auf die Mode-Taste, um Ihren Strompreis pro Kilowattstunde einzustellen. Die aktuelle Anzeige blinkt. Drücken Sie die Up-Taste, um die Einstellung vorzunehmen. Drücken Sie erneut die Mode-Taste, um zur nächsten Anzeige zu gelangen. Um die Einstellung abzuschließen, drücken Sie lange auf die Mode-Taste. Wenn Sie länger keine Eingabe vornehmen, kehrt das Gerät automatisch zum Startbildschirm zurück. Die Einstellungen werden dabei auch übernommen. Alle Echtzeitdaten werden jede Sekunde aktualisiert. Auf Werkseinstellung zurücksetzen: Wenn im Display eine unnormale Anzeige zu sehen ist oder die Tasten nicht mehr reagieren, setzen Sie das Gerät auf Werkseinstellungen. Drücken Sie dazu mit einem spitzen Gegenstand auf die Reset-Taste. Das Gerät wird auf Werkseinstellung zurückgesetzt. Die Daten werden dabei gelöscht. Die Einstellung der Energiekosten pro KWh bleibt jedoch erhalten. -->

- 0.5 kWh per day might be satisfied by ca. 400 peak Watts, i.e., 3 m2 solar panels
- 4 Stueck [Solarpanel 100 Watt 12 V](https://www.ebay.de/itm/Solarpanel-Solarmodul-100Watt-12V-12Volt-Solarzelle-Solar-Poly-Polykristallin/202982424608)
- Lowest yield in November is ca. 15% of highest yield in July
- Assuming a July daily yield of 400 W &middot; 0.7 efficiency &middot; 6 h = 1680 Wh, the November one might be just 250 Wh


## Solar Analysis

- Dachwinkel 45 Grad (horizontal tilt angle in Hamburg, Germany (53°N): the optimal tilt angle is close to 30°.
  At 45° tilt, the energy yield is stil very close to the maximum.
  This wide range of acceptable tilt angles makes roof installations attractive in higher latitudes
- Dachausrichtung: Hausdachfirst 57 Grad von Ost = X, also Azimuth +57 Grad;
  Balkondachfirst 327 Grad, also Azimuth -33 Grad (surface azimuth = angle from South to roof normal projected onto horizontal surface)
- 100 Watts requires ca. 0.7 m2 solar panels
- [3D sun path](http://andrewmarsh.com/apps/staging/sunpath3d.html)
  by [Andrew Marsh](http://andrewmarsh.com),
  explained in [sky distribution](http://performativedesign.com/articles/2019/sky-distribution)
- [mashup](https://revisionarch.com/solargoogle-maps-mashup), but prefer Revit
- [Neigung und Ausrichtung](https://www.pv-ertrag.com/neigung-und-ausrichtung)
- [Photovoltaic Geographical Information System Monthly Irradiation Data](https://re.jrc.ec.europa.eu/pvg_tools/en/#MR)


## Solar Panels

This is the data sheet for the first four solar panels on the balcony roof:

[Solarpanel 100 Watt Polykristallin für 12 Volt Systeme](https://www.ebay.de/itm/Solarpanel-Solarmodul-100Watt-12V-12Volt-Solarzelle-Solar-Poly-Polykristallin/202982424608):
Polykristallines Solarmodul mit seiner hohen Leistung und robusten Bauweise für Inselanlagen.
Das Modul ist durch ein spezialgehärtetes Glas abgedeckt um vor Umwelteinflüssen wie Hagel, Schnee und Eis zu schützen.
Ein Modulrahmen aus eloxiertem Aluminium sorgt für die Stabilität.
Mit einem hohen Wirkungsgrad wird eine Ausbeute von 5,56 Ampere erreicht.

- Robuste Ausführung mit Spezialglas und Alurahmen
- Hohe Leistung
- Wetterfeste Anschlussdose mit Anschlusskabel inkl. Stecker
- Dioden auf der Rückseite

Technische Daten:

- Nennleistung Pmax 100 Watt
- Spannung bei Nennleistung Vpmax 17,8 Volt
- Leerlauf Spannung Voc 22,1 Volt
- Kurzschluss Strom Isc 5,92 Ampere
- Strom bei Nennleistung Ipmax 5,62 Ampere
- Temperaturbereich -40°C / + 85°C
- Toleranz +/-5 %
- Solarzellen Polykristallin
- By-Pass Diode 12 Ampere
- Abmessungen 1000 x 669 x 30 mm (4 x 669 = 2676)
- Gewicht 8,1 kg
- Sicherheitsglas 3,2 mm

Second set of four panels along the east-facing roof ridge:

- Herstellernummer: YS100P-36_1er
- Max. Leistung: 100 W
- Max. Versorgungsspannung: 18 V
- Max. Leistungsstrom: 5.56 A
- Leerlaufspannung: 22.2 V
- Kurzschlussstrom: 5.89 A
- Abmessungen: 101 x 54 x 3 cm
- Gewicht: 6.3 kg
- Zellwirkungsgrad: 17.5 %
- Solartechnik: Polykristallin
- Marke: Yangtze Solar

## Mounting and Connecting Solar Panels

- [PV Halterung Module, Montagesystem](https://www.ebay.de/itm/PV-Halterung-Module-Montage-Solarbefestigung-Dachhaken-Stockschrauben-bis-4-2m/192890852205)  for mounting the four panels on the balcony roof
from [Diether](/j/doc/house/huenerberg/gottschalk/2021-04-08_diether_pv_montage_rechnung.pdf)
- [Second set of rails from bau-tech Solarenergie GmbH](/j/doc/house/huenerberg/gottschalk/2021-06-30_bautechsolar_montage.pdf) for
mounting the four panels for  along the east-facing roof ridge
- [Profiness GmbH](https://www.profiness.de), Broicher Waldweg 42, 45478 Mülheim a.d. Ruhr, Tel +49-208/309619-0, info@profiness-shop.de
- [Soldering Solar Connectors](https://youtu.be/NMwMIkyfIu8)


## Solar Charge Controller

Otto got his charger
from [offgridtec](https://www.offgridtec.com/offgridtec-pwm-pro-laderegler-12v-24v-30a-usb.html?c=741);
Kundenberatung +49-8721/7786187 (Mo - Do 08 - 12 und 13 - 18 Uhr, Fr 08 - 14 Uhr).

I am currently using the EPEver Tracer 3210AN.

- [Online manual](https://www.epsolarpv.com/upload/cert/file/1811/Tracer-AN-SMS-EL-V1.0.pdf)/[local link](/j/doc/hardware/manual/epever_tracer_3210an/epever_tracer_an_sms_el_v1.0.pdf)
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
  CC-USB zu RS-485 Konverter, SolarV GmbH, tel +4961969076877, info@solarv.de, tel China +86-10-82894112, info@epever.com


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

1. +5V &ndash; orange + white
2. +5V &ndash; orange
3. RS485 B &ndash; green + white
4. RS485 B &ndash; blue
5. RS485 A &ndash; blue + white
6. RS485 A &ndash; green
7. GND &ndash; brown + white
8. GND &ndash; brown

I used the following pins, standard colour coding, my 4-wire cable with red wires and 1, 2 and 4 black stripes, resp.:

- pin 3 &ndash; RS485 B &ndash; green + white &ndash; red with 1 black stripe
- pin 5 &ndash; RS485 A &ndash; blue + white &ndash; red with 2 black stripes
- pin 7 &ndash; ground GND &ndash; brown + white &ndash; red with 4 black stripes

Atached to a chopped off half of a cable marked:

- UTP CAT 5E PATCH ISO/TEC 11801 &amp; EN 50288 &amp; TIA EIA 5E8B.2 3P 24 AWG X4P Type CM (UL) C (UL) CHH E1785589

I guess UTP = unshielded twisted pair; X4P = times four pairs...

With that cable and the MacOS driver for the USB-RS485 adapter,
[jtracer](https://github.com/jeremytammik/jtracer) can
successfully query parameter data from the EPEver Tracer 3210AN.


## Batteries

Must read [how to find happiness with LiFePO4 batteries](https://www.solacity.com/how-to-keep-lifepo4-lithium-ion-batteries-happy);
LiFePO4 charge settings cheat sheet, translated from 12 to 24 V:

- Bulk/Absorb: 28.4 - 29.2 Volt
- Absorb time: 0 - 2 hours
- Float: 27.2 Volt or less
- No temperature compensation
- No equalize, or 29.2 Volt

My battery specs:

- Cornelius' old [12V 100Ah 100A 1200W power GTK lithium lifepo4 battery BMS 4S 12,8 V](https://de.aliexpress.com/item/33048551880.html?spm=a2g0s.9042311.0.0.16544c4di1iNDJ): 
Betriebsspannung 10-14.6 V, Überladungsschutzspannung 14.6 V + 0.05 V, Entladungsschutzspannung 10V + 0.05 V
- Otto's old battery: [12 V YellowTop 75 Ah](https://www.autobatterienbilliger.de/Optima-YT-S-5-5-YellowTop) (ca. 0.9 kWh) max charge 14.8 V, six cells, min 1.8 V x 6 = 10.8
- Co new: [4 x VariCore 3.2 V 280Ah](https://de.aliexpress.com/item/1005001563505796.html) + [LiIon batterey management system](https://de.aliexpress.com/item/4000837336363.html)
- Buy wire from [zaehlerschrank24.de](https://www.zaehlerschrank24.de)
- Q&amp;A on [solar panel short circuit](https://electronics.stackexchange.com/questions/18092/solar-panel-short-circuit)
- 24 V system: 8 cells of VariCore 3.2 V 200Ah 3C LiFePO4, 3.82 kg, 200 x 172 x 53 mm, working voltage 2.5-3.65 V
  &ndash; [specification](doc/pv/battery_varicore_lifepo4_spec.jpg)
  &ndash; battery working votage max charge 8 x 3.65 = 29.2 V, min discharge 8 x 2.5 = 20 V

<!--

What battery is this?
Solarbatterie 12V 280Ah EXAKT DCS Wohnmobil Versorgung Boot Batterie statt 230Ah
++VERSCHLOSSENE ZYKLENFESTE DEEP CYCLE SOLARBATTERIE++
Brandneu
5.0 von 5 Sternen.
1 Produktbewertung- Solarbatterie 12V 280Ah EXAKT DCS Wohnmobil Versorgung Boot Batterie statt 230Ah
EUR 254,90
BIG Solarbatterie 12V 200Ah Versorgung Notstrom Windkraft Batterie statt 180Ah
Brandneu
EUR 208,90

-->

## BMS Battery Management System

I first tried a Chinese smart BMS by Daly for 87 euro, and that did not work.

I then switched to a more expensive 200 euro non-smart German 
[BMS LiFePO 8S 150A 24V](https://www.i-tecc.de/shop/bmspcm/bms-lifepo4/8s-24v/511/bms-lifepo-8s-150a-24v)
by [i-tecc](https://www.i-tecc.de):

- Nennspannung: 25.6V (24V)
- Ladespannung: 28.8V (8 &middot; 3.6V)
- Überspannungsschutz: 3.9V ± 0.025V (8 &middot; 3.9 = 31.2); Freigabe 3.8V
- Tiefentlade-/Unterspannungsschtz: Aktivierung 2.1V, Freigabe 2.3V
- Ladestrom max.: 150A
- Entladestrom: 150A
- Balance-Strom: 110mA ± 10mA
- Überlastschutz: 500A
- Eigenverbrauch: ≤20µA je Zelle
- Temperaturüberwachung: ja
- [Detailed specification](doc/pv/itecc_bms_lifepo_8s_150a_24v.pdf)

That worked fine right out of the box.

## Inverter

### Victron Phoenix

I am temporarily using Cornelius Victron Phoenix inverter:
Manual for [Phoenix Inverter Compact 1200 and 1600](/j/doc/hardware/manual/victron_phoenix_inverter/manual_phoenix_inverter_compact_1200_1600.pdf).

Bad news: [Data communication with Victron Energy products](/j/doc/hardware/manual/victron_phoenix_inverter/rs232/technical_information_data_communication_with_victron_energy_products_en.pdf) says that the victron inverter communicates using VE.Bus and nothing else. 
"VE.Bus is our proprietary protocol used by the Inverters to synchronize their AC outputs. There are VE.Bus communication ports on our Inverters, Multi’s and Quattro’s. The synchronization feature is mission-critical. Direct third-party connections are not allowed. All interfacing has to be done via Modbus TCP (preferred), “VE.Bus to CANbus/NMEA2000 interface”, or via the MK2/MK3". To obtain official Modbus TCP requires a victron color control gx device, which costs around eur 500 on ebay. so, i would say, forget it. i see no realistic way to hook up these inverters or communicate with them at all.

Good news: [Connecting your Victron product to a computer with VE Configure](/j/doc/hardware/manual/victron_phoenix_inverter/guide_veconfigure.pdf) says that
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

## Switch Between Solar and Grid Main

- Switch between mains and battery power: could be a relay driven by the battery voltage, the BMS, or the inverter
    - [MAX6326 application note](https://www.maximintegrated.com/en/design/technical-documents/app-notes/1/1136.html) (2002)
    - [Using inverter output and a DPDT relay](http://www.reuk.co.uk/wordpress/electric-circuit/switch-from-inverter-to-mains-automatically) (double pole double throw);
    [low voltage disconnect kit](http://www.reuk.co.uk/wordpress/reuk-shop-low-voltage-disconnects-lvd/buy-mini-12v-programmable-low-voltage-disconnect-lvd)
    - [Using Arduino](https://forum.allaboutcircuits.com/threads/how-to-wire-up-a-relay-for-switching-between-two-dc-sources-solar-and-battery-to-power-a-ardu-proj.153002)
    - [Conrad Components 195308 Batteriewächter Bausatz 12 V/DC](https://www.conrad.de/de/p/conrad-components-195308-batteriewaechter-bausatz-12-v-dc-195308.html) &ndash; order smart switch tel +49-9604/40 87 87 + relais DPDT doppel-poliges wechsel-relais, vielleicht bistabil?
    - [ELV H-Tronic MPC 1000 Netz-Umschaltstation](https://de.elv.com/h-tronic-mpc-1000-netz-umschaltstation-250136)
- Using a latching relay (impulsrelais, haftrelais, einrastrelais, ankerrelais, kammrelais, cradle relay?):
    - [Printrelais 12V Ningbo S7001A12W 10A 250V Wechselkontakt](https://www.amazon.de/dp/B07J4SS7S6/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07J4SS7S6p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMTE0N1VEWkVTMU5ZJmVuY3J5cHRlZElkPUEwNDE5NzQ5VzJUMTFUNjZRREdHJmVuY3J5cHRlZEFkSWQ9QTA0MjAyNTUyMVFIOTlOUFJIMDlDJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)
    - [Printrelais 12V Song Chuan 882N-1CH-S 12VDC 12VDC 8A 250V Wechselkontakt](https://www.amazon.de/Printrelais-Song-Chuan-882N-1CH-S-Wechselkontakt/dp/B07JJX65BK/ref=pd_sbs_1?pd_rd_w=aFyK3&pf_rd_p=a0a2bb41-2b9d-47ea-9dff-8a3ade3a13d6&pf_rd_r=1EP1VJ2QQVSTZ1CQS37E&pd_rd_r=5d47c41c-c8b0-4684-b82f-5572cb9563ea&pd_rd_wg=HWhgC&pd_rd_i=B07JJX65BK&psc=1)
    - [Amagogo SONGLE 12V 1 CH Relais SRD 12VDC SL C 250V AC 30V 10A DC](https://www.amazon.de/Amagogo-St%C3%BCck-SONGLE-Relais-Werkstatt/dp/B08L3PD396/ref=sr_1_21?dchild=1&keywords=relais+wechsel+3v+200v&qid=1619706658&sr=8-21)
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
- [Victron inverter model Phoenix Compact 1600](/j/doc/hardware/manual/victron_phoenix_inverter/manual_phoenix_inverter_compact_1200_1600.pdf)
- Battery fuses: 60A between chanrge controller and battery, 300A between battery and inverter

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

Starting 2021-07-19 after installing the second charger for the roof ridge panels, I also added the total kWh produced by the two chargers attached to the four roof ridge panels facing east `E` and the four balcony roof ones facing south `S` and started monitoring power generation and consumption from one morning to the next;
&Delta;E, &Delta;S and consumption C are in kWh per 24h.

<table class="r">
<tr><td>date time</td><td>E</td><td>S</td><td>V</td><td>kWh</td> <td>&Delta;E</td><td>&Delta;S</td><td>C</td></tr>
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

<table class="r" style="font-size:75%">
<tr><td>date time</td> <td>E</td> <td>S</td> 
<td>V<sub style="font-size:75%">E</sub></td> <td>A<sub style="font-size:75%">E</sub></td>
<td>V<sub style="font-size:75%">S</sub></td> <td>A<sub style="font-size:75%">S</sub></td>
<td>V<sub style="font-size:75%">I</sub></td> <td>V<sub style="font-size:75%">B</sub></td> <td>kWh</td> <td>&Delta;E</td> <td>&Delta;S</td> <td>C</td></tr>
<tr><td>2021-08-30 15:00</td>  <td>9.1</td> <td>67.1</td> <td></td> <td></td> <td></td> <td></td> <td>27.3</td> <td></td> <td>44.8</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-08-30 18:00</td>  <td>9.1</td> <td>67.3</td> <td></td> <td></td> <td></td> <td></td> <td>27.3</td> <td></td> <td>44.9</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-08-31 06:40</td>  <td colspan="12" style="text-align:left">BMS blocked</td></tr>
<tr><td>2021-08-31 08:40</td>  <td>9.1</td> <td>67.3</td> <td></td> <td></td> <td></td> <td></td> <td>26.4</td> <td></td> <td>45.4</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-08-31 20:40</td>  <td>9.5</td> <td>68.1</td> <td></td> <td></td> <td></td> <td></td> <td>26.5</td> <td></td> <td>46.1</td> <td>0.4</td>      <td>0.8</td>      <td>1.2</td></tr>
<tr><td>2021-09-01 08:20</td>  <td>9.5</td> <td>68.1</td> <td></td> <td></td> <td></td> <td></td> <td>26.4</td> <td></td> <td>46.6</td> <td></td>         <td></td>         <td></td></tr>
<tr><td>2021-09-01 21:40</td> <td>10.3</td> <td>68.8</td> <td></td> <td></td> <td></td> <td></td> <td>26.5</td> <td></td> <td>47.3</td> <td>0.8</td>      <td>0.7</td>      <td>1.2</td></tr>
<tr><td>2021-09-01 23:10</td> <td colspan="12" style="text-align:left">BMS blocked</td></tr>
<tr><td>2021-09-02 09:30</td> <td colspan="12" style="text-align:left">Fixed loose BMS C8+ sensor</td></tr>
<tr><td>2021-09-02 09:30</td> <td>10.3</td> <td>68.8</td> <td></td> <td></td> <td></td> <td></td> <td>26.5</td> <td></td> <td>83.9</td>  <td></td>        <td></td>         <td></td></tr>
<tr><td>2021-09-02 20:10</td> <td>10.9</td> <td>69.0</td> <td></td> <td></td> <td></td> <td></td> <td>26.6</td> <td></td> <td>84.3</td>  <td></td>        <td></td>         <td></td></tr>
<tr><td>2021-09-03 09:00</td> <td>10.9</td> <td>69.0</td> <td></td> <td></td> <td></td> <td></td> <td>26.3</td> <td></td> <td>84.9</td>  <td></td>        <td></td>         <td></td></tr>
<tr><td>2021-09-03 10:00</td> <td>11.0</td> <td>69.0</td> <td>26.4</td> <td></td> <td>26.3</td> <td></td> <td>26.5</td> <td>25.8</td> <td>85.0</td> <td></td> <td></td> <td></td></tr>
<tr><td>2021-09-03 12:10</td> <td>11.5</td> <td>69.1</td> <td>27.1</td> <td>7.7</td> <td>27.1</td> <td>8.6</td> <td>27.2</td> <td>26.5</td> <td>85.1</td> <td></td> <td></td> <td></td></tr>
</table>

While the battery was blocked in the night between September 1-2, the consumption meter jumped from 47.3 to 83.9 kWh, so deduct 36.6 from the total consumption.

With the chargers charging slightly at 10 o'clock in the morning, producing 0.1-0.2 A each, the different devices `S`, `E`, inverter `I` and voltmeter on battery poles `B` report the following voltages:

<table class="r">
<tr><td>date time</td>         <td>E</td>   <td>S</td>    <td>I</td>    <td>B</td></tr>
<tr><td>2021-09-03 10:00</td> <td>26.4</td> <td>26.3</td> <td>26.5</td> <td>25.8</td></tr>
</table>

