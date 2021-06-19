# <a name="top"></a>PV solar power photovoltaik

#### Table of Contents

<div id="toc"></div>

## links

- [DIY Off Grid Solar Charge Controllers](https://www.mobile-solarpower.com/solar-charge-controllers.html)
- [DIY solar electric projects forum](https://diysolarforum.com)
- Dachwinkel 45 Grad (horizontal tilt angle in Hamburg, Germany (53°N): the optimal tilt angle is close to 30°.
  At 45° tilt, the energy yield is stil very close to the maximum.
  This wide range of acceptable tilt angles makes roof installations attractive in higher latitudes
- Dachausrichtung: Hausdachfirst 57 Grad von Ost = X, also Azimuth +57 Grad;
  Balkondachfirst 327 Grad, also Azimuth -33 Grad (surface azimuth = angle from South to roof normal projected onto horizontal surface)
- 100 Watts requires ca. 0.7 m2
- We need ca. 400 Watts, i.e., 3 m2
- 4 Stueck [Solarpanel 100 Watt 12 V](https://www.ebay.de/itm/Solarpanel-Solarmodul-100Watt-12V-12Volt-Solarzelle-Solar-Poly-Polykristallin/202982424608)
- Lowest yield in November is ca. 15% of highest yield in July
- Assuming a July daily yield of 400 W &middot; 0.7 efficiency &middot; 6 h = 1680 Wh, the November one might be just 250 Wh
- Klingeltrafo 4-6-8 V 1 A uses less than 15 W
- Treppenhaus Licht oben und unten je 15 W
- Kellerlicht 5 &middot; 15 W
- Total max simultaneous load 8 &middot; 15 = 120 Watt
- Assuming the Treppenlicht was running non-stop for 6 hours: 30 W &middot; 6 h = 180 Wh
- So, to run just lighting and doorbells, 0.2 kWh ought to suffice; a 12 V 40 Ah battery will provide 0.48 kWh 
- LED CRI 95 is good (natural sunlight is CRI 100)
- [450 LED flexible strip light roll 12V CRI 95 LED 3000K Warm White](https://www.amazon.de/gp/product/B07VVMTQ5T/ref=ox_sc_act_title_8), ca. 10 Lumen per LED
- [Battery](https://www.aliexpress.com/item/4001217714484.html)
- [Laderegler solar charger](https://www.amazon.de/EPEVER-Solarladeregler-Solarmodul-automatisch-identifizieren/dp/B071GRK4J8/ref=sr_1_1_sspa)
- The solar panel providing 100 Watt at 12 V will generate less current than 10 A at 12 V, so 2.5 mm diameter wire is sufficient for each individual panel;
more precisely: Pmax 100 Watt, Vpmax 17.8 Volt, Ipmax 5.62 Ampere
- Prepare a 220 V charger for the 12 V battery, in case it runs out
- Lay a new 220 V cable from the 12 V solar power inverter down to the basement wall plugs
- [Moni's fridge](/j/doc/hardware/manual/bomann_kuehlschrank/EU_Datenblatt_KG_185.pdf) uses 0.522 kWh per day, 190 kWh per year
- 2021-04-07 18:00 started monitoring fridge electricity consumption using [Pearl SD-2209-675](https://www.pearl.de/a-SD2209-3102.shtml), originally [revolt  SD-2209-675](https://www.revolt-power.de/Digitaler-Energiekostenmesser-Stromverbrauchszaeh-SD-2209-919.shtml)

<!-- Drücken Sie wiederholt auf die Mode-Taste, um durch die Einstellungen zu wechseln: W - V - Total KWh - Total € - € KWh. (Leistung, Spannung, Energieverbrauch insgesamt, Kosten insgesamt, eingestellter Strompreis pro Kilowattstunde) Drücken Sie lange auf die Mode-Taste, um Ihren Strompreis pro Kilowattstunde einzustellen. Die aktuelle Anzeige blinkt. Drücken Sie die Up-Taste, um die Einstellung vorzunehmen. Drücken Sie erneut die Mode-Taste, um zur nächsten Anzeige zu gelangen. Um die Einstellung abzuschließen, drücken Sie lange auf die Mode-Taste. Wenn Sie länger keine Eingabe vornehmen, kehrt das Gerät automatisch zum Startbildschirm zurück. Die Einstellungen werden dabei auch übernommen. Alle Echtzeitdaten werden jede Sekunde aktualisiert. Auf Werkseinstellung zurücksetzen: Wenn im Display eine unnormale Anzeige zu sehen ist oder die Tasten nicht mehr reagieren, setzen Sie das Gerät auf Werkseinstellungen. Drücken Sie dazu mit einem spitzen Gegenstand auf die Reset-Taste. Das Gerät wird auf Werkseinstellung zurückgesetzt. Die Daten werden dabei gelöscht. Die Einstellung der Energiekosten pro KWh bleibt jedoch erhalten. -->

Maybe we ought to run a new 220 V line down to the basement, and just hook up the plugs to new wires.

We could also grab the 220 V for the plugs from the drehstrom installation...

Or both, in parallel, in case the battery runs out...

Solar Analysis:

- [3D sun path](http://andrewmarsh.com/apps/staging/sunpath3d.html)
  by [Andrew Marsh](http://andrewmarsh.com),
  explained in [sly distribution](http://performativedesign.com/articles/2019/sky-distribution)
- [mashup](https://revisionarch.com/solargoogle-maps-mashup), but prefer Revit
- [Neigung und Ausrichtung](https://www.pv-ertrag.com/neigung-und-ausrichtung)

This is the data sheet for the four solar panels we bought:

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

Montagesysteme:

- [PV Halterung Module](https://www.ebay.de/itm/PV-Halterung-Module-Montage-Solarbefestigung-Dachhaken-Stockschrauben-bis-4-2m/192890852205)
- [Profiness GmbH](https://www.profiness.de), Broicher Waldweg 42, 45478 Mülheim a.d. Ruhr, Tel +49-208/309619-0, info@profiness-shop.de

Battery:

- Cornelius' old battery 12 V 100Ah 1 kWh, [GTK lithium lifepo4 battery 12V 100AH 100A BMS 4S 12,8 V 1200W power](https://de.aliexpress.com/item/33048551880.html?spm=a2g0s.9042311.0.0.16544c4di1iNDJ): 
Betriebsspannung 10-14.6 V, Überladungsschutzspannung 14.6 V + 0.05 V, Entladungsschutzspannung 10V + 0.05 V
- Otto's old battery: [12 V YellowTop 75 Ah](https://www.autobatterienbilliger.de/Optima-YT-S-5-5-YellowTop) (ca. 0.9 kWh) max charge 14.8 V, six cells, min 1.8 V x 6 = 10.8
- Co new: [4 x VariCore 3.2 V 280Ah](https://de.aliexpress.com/item/1005001563505796.html) + [LiIon batterey management system](https://de.aliexpress.com/item/4000837336363.html)
- Buy wire from [zaehlerschrank24.de](https://www.zaehlerschrank24.de)
- Q&amp;A on [solar panel short circuit](https://electronics.stackexchange.com/questions/18092/solar-panel-short-circuit)

Components:

- Battery: 4 x 3V 280 Ah
- Battery management system BMS ca. eur 500
- Solar charge controller eur 100
- Inverter: co has a good one for eur 400
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

### Solar Charge Controller

- EPEver Tracer 3210AN
- [Online manual](https://www.epsolarpv.com/upload/cert/file/1811/Tracer-AN-SMS-EL-V1.0.pdf)/[local link](/j/doc/hardware/manual/epever_tracer_3210an/epever_tracer_an_sms_el_v1.0.pdf)
- [Python code and RS485 protocol RJ45 connector cable pins for communicatiing with EPEver Tracer 3210AN](https://stackoverflow.com/questions/64251163/cant-connect-to-epsolar-tracer-3210an-charge-controller-from-windows-10-via-ser)
- [Tracer RS485 Modbus-Blynk](https://github.com/tekk/Tracer-RS485-Modbus-Blynk-V2), an Arduino project to connect the EPEver Tracer MPPT Solar Controller RS-485 Modbus to an ESP8266 and monitor it using the Blynk mobile app
- [Epever RS485 to wifi adaptor](https://www.tindie.com/products/plop211/epever-rs485-to-wifi-adaptor-v15)
- [Wingoneer USB 2.0 to RS485 serial converter adapter CP2104 SN75176](https://www.ebay.de/itm/183714207241)

