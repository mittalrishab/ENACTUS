// document.addEventListener('DOMContentLoaded', () => {
//     // Paste the provided JSON data here
//     const membersData = [
//         { "S.NO.": "1", "REGISTRATION NUMBER": "23BMH1140", "FULL NAME": "Divyadeep Singh Chouhan", "GENDER": "M", "PHONE ": "7909801311", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "divyadeep.singh2023@vitstudent.ac.in", "DEPARTMENT": "BOARDS", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH MECHATRONICS" },
//         { "S.NO.": "2", "REGISTRATION NUMBER": "23BRS1360", "FULL NAME": "Pranav P Nair", "GENDER": "M", "PHONE ": "8120670686", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "pranav.pnair2023@vitstudent.ac.in", "DEPARTMENT": "BOARDS", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ROBOTICS" },
//         { "S.NO.": "3", "REGISTRATION NUMBER": "23BCE1891", "FULL NAME": "Urvashi Rathod", "GENDER": "F", "PHONE ": "9846500684", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "urvashi.rathod2023@vitstudent.ac.in", "DEPARTMENT": "BOARDS", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "4", "REGISTRATION NUMBER": "23BEC1174", "FULL NAME": "Vaishnavi Gosi", "GENDER": "F", "PHONE ": "9265024310", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "vaishnavi.gosi2023@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "INARA LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECE CORE" },
//         { "S.NO.": "5", "REGISTRATION NUMBER": "23BCE1880", "FULL NAME": "Jia Shah", "GENDER": "F", "PHONE ": "9913523196", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "jia.shah2023@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "INARA LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "6", "REGISTRATION NUMBER": "23BCE1899", "FULL NAME": "Loveena Batra", "GENDER": "F", "PHONE ": "9963118332", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "loveena.batra2023@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "7", "REGISTRATION NUMBER": "23BCE1663", "FULL NAME": "Cain Manoj Pynadath", "GENDER": "M", "PHONE ": "9645940659", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "cainmanoj.pynadath2023@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "MINAVAR LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "8", "REGISTRATION NUMBER": "23BCE1840", "FULL NAME": "YASHSHREE MISHRA", "GENDER": "F", "PHONE ": "8683852241", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "yashshree.mishra2023@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "NAARI LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "9", "REGISTRATION NUMBER": "23BCE1263", "FULL NAME": "Abhishek S", "GENDER": "M", "PHONE ": "6238523816", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "abhishek.s2023@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "NAARI LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "10", "REGISTRATION NUMBER": "23MIA1003", "FULL NAME": "Madhu Saraswati Tamanna", "GENDER": "F", "PHONE ": "8480669860", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "madhu.saraswati2023@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "M.TECH CSE CORE" },
//         { "S.NO.": "11", "REGISTRATION NUMBER": "23BCE5085", "FULL NAME": "Ishaan Singh", "GENDER": "M", "PHONE ": "8287174260", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "Ishaan.singh2023@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA LEADS", "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "12", "REGISTRATION NUMBER": "23BCE1258", "FULL NAME": "Rishabh Mittal", "GENDER": "M", "PHONE ": "9560072050", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "rishabh.mittal2023@vitstudent.ac.in", "DEPARTMENT": "OPERATIONS LEAD", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "13", "REGISTRATION NUMBER": "24BEE1173", "FULL NAME": "Ankita Singh", "GENDER": "F", "PHONE ": "7765068918", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "ankita.singh2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH EEE CORE" },
//         { "S.NO.": "14", "REGISTRATION NUMBER": "24BCE1556", "FULL NAME": "Hasini", "GENDER": "F", "PHONE ": "8123651587", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "hasini.pagadala2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "MINAVAR", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "15", "REGISTRATION NUMBER": "24BEC1296", "FULL NAME": "Gayathri Rajesh", "GENDER": "F", "PHONE ": "8296992797", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "gayathri.rajesh2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECE CORE" },
//         { "S.NO.": "16", "REGISTRATION NUMBER": "24BAI1257", "FULL NAME": "Sharanya Ahire", "GENDER": "F", "PHONE ": "8291534281", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "sharanya.narendra2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "17", "REGISTRATION NUMBER": "24BDS1096", "FULL NAME": "Shreya S Shirol", "GENDER": "F", "PHONE ": "9061363621", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "shreya.sshirol2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "NAARI", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE DS" },
//         { "S.NO.": "18", "REGISTRATION NUMBER": "24BCE5450", "FULL NAME": "Jayadharshini R", "GENDER": "F", "PHONE ": "7092514850", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "jayadharshini.r2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "19", "REGISTRATION NUMBER": "24BCE5548", "FULL NAME": "Madhav Khurana", "GENDER": "M", "PHONE ": "9810728261", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "madhav.khurana2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "MINAVAR", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "20", "REGISTRATION NUMBER": "24BME1109", "FULL NAME": "Satchit R Chachadi", "GENDER": "M", "PHONE ": "9811661979", "DATE OF BIRTH": "23/01/2007", "YEAR OF STUDY": "2", "EMAIL": "Satchit.rchachadi2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH MECHANICAL CORE" },
//         { "S.NO.": "21", "REGISTRATION NUMBER": "24BDS1211", "FULL NAME": "Srikrishna Diwakar Choudhary", "GENDER": "M", "PHONE ": "8591906752", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "srikrishna.diwakar2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE DS" },
//         { "S.NO.": "22", "REGISTRATION NUMBER": "24BCE1762", "FULL NAME": "Dhyan Kannoth", "GENDER": "M", "PHONE ": "9019864258", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "dhyan.kannoth2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "23", "REGISTRATION NUMBER": "24BCE5445", "FULL NAME": "Vasu Jindal", "GENDER": "M", "PHONE ": "8360358519", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "vasu.jindal2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "24", "REGISTRATION NUMBER": "24BEE1041", "FULL NAME": "Thanmaya Manilal", "GENDER": "M", "PHONE ": "9778506656", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "thanmaya.manilal2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH EEE CORE" },
//         { "S.NO.": "25", "REGISTRATION NUMBER": "25BCE1407", "FULL NAME": "Pavan S", "GENDER": "M", "PHONE ": "8939675690", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "pavan.saravanakumar2025@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "26", "REGISTRATION NUMBER": "25BEE1289", "FULL NAME": "Sanjeev S", "GENDER": "M", "PHONE ": "7418618839", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "sanjeev.s2025@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH EEE CORE" },
//         { "S.NO.": "27", "REGISTRATION NUMBER": "25BEC1073", "FULL NAME": "SAI VIGNESH", "GENDER": "M", "PHONE ": "9790722565", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "saivignesh.b2025@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH ECE CORE" },
//         { "S.NO.": "28", "REGISTRATION NUMBER": "24BLC1211", "FULL NAME": "Visweshwaran K", "GENDER": "M", "PHONE ": "8939132364", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "visweshwaran.k2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "29", "REGISTRATION NUMBER": "24BAI1621", "FULL NAME": "Adithyan S Nair", "GENDER": "M", "PHONE ": "8593872534", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "adithyan.snair2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "MINAVAR", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "30", "REGISTRATION NUMBER": "24BLC1367", "FULL NAME": "Kushagra Kalra", "GENDER": "M", "PHONE ": "9457015966", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "kushagra.kalra2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "31", "REGISTRATION NUMBER": "24BRS1197", "FULL NAME": "Swapnal kumar singh", "GENDER": "M", "PHONE ": "7099007845", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "swapnal.kumarsingh2025@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "INARA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ROBOTICS" },
//         { "S.NO.": "32", "REGISTRATION NUMBER": "24BME1112", "FULL NAME": "Keerthivarman M", "GENDER": "M", "PHONE ": "7305968528", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "keerthivarman.m2024@vitstudent.ac.in", "DEPARTMENT": "Operations", "PROJECT 1": "NAARI", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH MECHANICAL CORE" },
//         { "S.NO.": "33", "REGISTRATION NUMBER": "23BMH1156", "FULL NAME": "Himanshu Thadani", "GENDER": "M", "PHONE ": "8305666945", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "himanshu.thadani2023@vitstudent.ac.in", "DEPARTMENT": "FINANCE LEAD", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH MECHATRONICS" },
//         { "S.NO.": "34", "REGISTRATION NUMBER": "25BCE1337", "FULL NAME": "Shreevidha Gour", "GENDER": "F", "PHONE ": "9977088999", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "shreevidha.gour2025@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "INARA", "PROJECT 2": "MINAVAR", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "35", "REGISTRATION NUMBER": "25BCE5590", "FULL NAME": "Aneesha Yadav", "GENDER": "F", "PHONE ": "9833102508", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "yadav.aneesha2025@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "NAARI", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "36", "REGISTRATION NUMBER": "24BPS1039", "FULL NAME": "Keya Pala", "GENDER": "F", "PHONE ": "9327640248", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "keya.pareshpala2024@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CPS" },
//         { "S.NO.": "37", "REGISTRATION NUMBER": "24BAI1060", "FULL NAME": "Rashmi Kulkarni", "GENDER": "F", "PHONE ": "8208216563", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "rashmi.shailesh2024@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "38", "REGISTRATION NUMBER": "24BCE5366", "FULL NAME": "Khush Patel", "GENDER": "M", "PHONE ": "9265796439", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "khush.patel2024@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "INARA", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "39", "REGISTRATION NUMBER": "25BAI1577", "FULL NAME": "Shantanu Jalit", "GENDER": "M", "PHONE ": "8830785646", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "shantanu.sandeep2025@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "40", "REGISTRATION NUMBER": "24BCE1004", "FULL NAME": "Shriram Kumar M", "GENDER": "M", "PHONE ": "9445161090", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "shriramkumar.m2024@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "INARA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "41", "REGISTRATION NUMBER": "24BCE1777", "FULL NAME": "Dharshith Gudla", "GENDER": "M", "PHONE ": "9381673811", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "dharshith.gudla2024@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "MINAVAR", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "42", "REGISTRATION NUMBER": "24BCE5396", "FULL NAME": "Samyak Srijan", "GENDER": "M", "PHONE ": "6200772277", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "samyak.srijan2024@vitstudent.ac.in", "DEPARTMENT": "Finance", "PROJECT 1": "TARU", "PROJECT 2": "INARA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "43", "REGISTRATION NUMBER": "23BCE1906", "FULL NAME": "Arundhati Singh", "GENDER": "F", "PHONE ": "8585954362", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "arundhati.singh2023@vitstudent.ac.in", "DEPARTMENT": "CREATIVE LEADS", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "44", "REGISTRATION NUMBER": "23BCE1769", "FULL NAME": "Vanshika Gupta", "GENDER": "F", "PHONE ": "8826600105", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "vanshika.gupta2023@vitstudent.ac.in", "DEPARTMENT": null, "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "45", "REGISTRATION NUMBER": "23MIA1111", "FULL NAME": "Peta Siva Nandhan Reddy", "GENDER": "M", "PHONE ": "9133306718", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "Peta.siva2023@vitstudent.ac.in", "DEPARTMENT": null, "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "M.TECH CSE CORE" },
//         { "S.NO.": "46", "REGISTRATION NUMBER": "25BLC1251", "FULL NAME": "Aditi", "GENDER": "F", "PHONE ": "9958200788", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "aditi.2025@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "47", "REGISTRATION NUMBER": "24BPS1075", "FULL NAME": "Varsha Agarwal", "GENDER": "F", "PHONE ": "8011266262", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "varsha.agarwal2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "INARA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CPS" },
//         { "S.NO.": "48", "REGISTRATION NUMBER": "25BCE1386", "FULL NAME": "Vaibhavi Gupta", "GENDER": "F", "PHONE ": "9794695428", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "vaibhavi.gupta2025@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "49", "REGISTRATION NUMBER": "24BEC1348", "FULL NAME": "Ishita", "GENDER": "F", "PHONE ": "9786261104", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "ishita.2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "INARA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH ECE CORE" },
//         { "S.NO.": "50", "REGISTRATION NUMBER": "24BEC1420", "FULL NAME": "Sukirti", "GENDER": "F", "PHONE ": "8004234930", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "sukirti.2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "INARA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECE CORE" },
//         { "S.NO.": "51", "REGISTRATION NUMBER": "24BEC1171", "FULL NAME": "Adwika", "GENDER": "F", "PHONE ": "8303560557", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "adwika.2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECE CORE" },
//         { "S.NO.": "52", "REGISTRATION NUMBER": "24BCE5095", "FULL NAME": "Mokshdaa Gupta", "GENDER": "F", "PHONE ": "8287926240", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "mokshdaa.gupta2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "NAARI", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "53", "REGISTRATION NUMBER": "24BCE1766", "FULL NAME": "Riya Mhalgi", "GENDER": "F", "PHONE ": "9512552394", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "riya.jayeshmhalgi2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "54", "REGISTRATION NUMBER": "24BCE5372", "FULL NAME": "Bhavya Shri Vijayakumar", "GENDER": "F", "PHONE ": "9789581701", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "bhavya.shri2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "55", "REGISTRATION NUMBER": "25BLC1167", "FULL NAME": "Prabhsneh Kaur", "GENDER": "M", "PHONE ": "7982889615", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "prabhsneh.kaur2025@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "MINAVAR", "PROJECT 2": "INARA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "56", "REGISTRATION NUMBER": "24BME1092", "FULL NAME": "Ruchir", "GENDER": "M", "PHONE ": "9916140406", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "ruchirangada.hn2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "MINAVAR", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH MECHANICAL CORE" },
//         { "S.NO.": "57", "REGISTRATION NUMBER": "24BCE1779", "FULL NAME": "Samvid Bhatt", "GENDER": "M", "PHONE ": "7045833523", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "samvid.bhatt2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "58", "REGISTRATION NUMBER": "25BAI1391", "FULL NAME": "Visaka Sriram", "GENDER": "M", "PHONE ": "9043957340", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "visaka.sriram2025@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "59", "REGISTRATION NUMBER": "24BCE5058", "FULL NAME": "Tanish Bhardwaj", "GENDER": "M", "PHONE ": "9319467567", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "tanish.bhardwaj2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "POORANYA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "60", "REGISTRATION NUMBER": "24BCE1390", "FULL NAME": "Shubhang Tiwari", "GENDER": "M", "PHONE ": "9650127223", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "shubhang.tiwari2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "NAARI", "PROJECT 2": "POORANYA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "61", "REGISTRATION NUMBER": "24BLC1026", "FULL NAME": "Rajan Sirvi", "GENDER": "M", "PHONE ": "9983332703", "DATE OF BIRTH": "27/03/2005", "YEAR OF STUDY": "2", "EMAIL": "rajan.sirvi2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "MINAVAR", "PROJECT 2": "INARA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "62", "REGISTRATION NUMBER": "24MIA1067", "FULL NAME": "Shreehari Sasi Kumar Nair", "GENDER": "M", "PHONE ": "9539508180", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "shreehari.sasi2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "NAARI", "PROJECT 2": "INARA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "M.TECH CSE CORE" },
//         { "S.NO.": "63", "REGISTRATION NUMBER": "23BLC1130", "FULL NAME": "Soham Landge", "GENDER": "M", "PHONE ": "9359620850", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "soham.makarand2023@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "MINAVAR", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "64", "REGISTRATION NUMBER": "24MIA1075", "FULL NAME": "Anto Edison", "GENDER": "M", "PHONE ": "7994041561", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "anto.edison2024@vitstudent.ac.in", "DEPARTMENT": "Creative", "PROJECT 1": "NAARI", "PROJECT 2": "INARA", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "M.TECH CSE CORE" },
//         { "S.NO.": "65", "REGISTRATION NUMBER": "23BAI1261", "FULL NAME": "Abhigyan Sinha", "GENDER": "M", "PHONE ": "7004255383", "DATE OF BIRTH": null, "YEAR OF STUDY": "3", "EMAIL": "abhigyan.sinha2023@vitstudent.ac.in", "DEPARTMENT": "MARKETING AND SPONSORSHIP LEAD", "PROJECT 1": null, "PROJECT 2": null, "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "66", "REGISTRATION NUMBER": "24BDS1151", "FULL NAME": "Smera Rawal", "GENDER": "F", "PHONE ": "9667473752", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "smera.rawal2024@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "INARA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE DS" },
//         { "S.NO.": "67", "REGISTRATION NUMBER": "25BAI1701", "FULL NAME": "AADHIRA K", "GENDER": "F", "PHONE ": "9342923451", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "aadhira.k2025@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "INARA", "PROJECT 2": "MINAVAR", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "68", "REGISTRATION NUMBER": "25BCE5732", "FULL NAME": "Shreya Balakrishnan", "GENDER": "F", "PHONE ": "9025708302", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "shreya.balakrishnan2025@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "69", "REGISTRATION NUMBER": "24BRS1115", "FULL NAME": "Rishika", "GENDER": "F", "PHONE ": "8766091430", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "rishika.saha2024@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "MINAVAR", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ROBOTICS" },
//         { "S.NO.": "70", "REGISTRATION NUMBER": "24BAI1345", "FULL NAME": "Sneha Jain", "GENDER": "F", "PHONE ": "7999231213", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "sneha.jain2024@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "71", "REGISTRATION NUMBER": "24BAI1320", "FULL NAME": "Suhani Pandey", "GENDER": "F", "PHONE ": "9818867760", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "suhani.pandey2024@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "NAARI", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE AI & ML" },
//         { "S.NO.": "72", "REGISTRATION NUMBER": "23BCE1655", "FULL NAME": "Riya Dhananjay Shetty", "GENDER": "F", "PHONE ": "9082550433", "DATE OF BIRTH": "23/02/2005", "YEAR OF STUDY": "3", "EMAIL": "riya.dhananjay2023@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "POORANYA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "73", "REGISTRATION NUMBER": "24BLC1163", "FULL NAME": "Yashwanth Ratish", "GENDER": "M", "PHONE ": "9789927073", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "yashwanth.rathish2024@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "INARA", "PROJECT 2": "NAARI", "HOSTELLER / DAY SCHOLARS": "Day Scholar", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "74", "REGISTRATION NUMBER": "25BLC1205", "FULL NAME": "Aaron Eby", "GENDER": "M", "PHONE ": "9074791656", "DATE OF BIRTH": null, "YEAR OF STUDY": "1", "EMAIL": "aaron.ebyalphonse2025@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "INARA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH ECM" },
//         { "S.NO.": "75", "REGISTRATION NUMBER": "24BCE5111", "FULL NAME": "Adithyadev V R", "GENDER": "M", "PHONE ": "9686602471", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "adithyadev.vr2024@vitstudent.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "INARA", "PROJECT 2": "MINAVAR", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" },
//         { "S.NO.": "76", "REGISTRATION NUMBER": "24BCE1207", "FULL NAME": "Veer Vikram Saxena", "GENDER": "M", "PHONE ": "9594313592", "DATE OF BIRTH": null, "YEAR OF STUDY": "2", "EMAIL": "veer.vikramsaxena2024@vit.student.ac.in", "DEPARTMENT": "MnS", "PROJECT 1": "POORANYA", "PROJECT 2": "TARU", "HOSTELLER / DAY SCHOLARS": "Hosteller", "PROGRAMME": "B.TECH CSE CORE" }
//     ];

//     const membersGrid = document.getElementById('membersGrid');
//     const searchInput = document.getElementById('searchInput');
//     const departmentFilter = document.getElementById('departmentFilter');
//     const projectFilter = document.getElementById('projectFilter');
//     const yearFilter = document.getElementById('yearFilter');
//     const memberCount = document.getElementById('member-count');
//     const resetButton = document.getElementById('resetButton');

//     // --- Populate filter dropdowns dynamically ---
//     const populateFilters = () => {
//         const departments = new Set();
//         const projects = new Set();
//         const years = new Set();

//         membersData.forEach(member => {
//             if (member.DEPARTMENT) departments.add(member.DEPARTMENT.trim());
//             if (member['PROJECT 1']) projects.add(member['PROJECT 1'].replace(/ LEADS?/, '').trim());
//             if (member['PROJECT 2']) projects.add(member['PROJECT 2'].trim());
//             if (member['YEAR OF STUDY']) years.add(member['YEAR OF STUDY'].trim());
//         });

//         // Sort and populate departments
//         Array.from(departments).sort().forEach(dept => {
//             const option = document.createElement('option');
//             option.value = dept;
//             option.textContent = dept;
//             departmentFilter.appendChild(option);
//         });

//         // Sort and populate projects
//         Array.from(projects).sort().forEach(proj => {
//             const option = document.createElement('option');
//             option.value = proj;
//             option.textContent = proj;
//             projectFilter.appendChild(option);
//         });

//         // Sort and populate years
//         Array.from(years).sort((a, b) => a - b).forEach(year => {
//             const option = document.createElement('option');
//             option.value = year;
//             option.textContent = `Year ${year}`;
//             yearFilter.appendChild(option);
//         });
//     };
    
//     // --- Display members ---
//     const displayMembers = (members) => {
//         membersGrid.innerHTML = '';
//         memberCount.textContent = `Showing ${members.length} of ${membersData.length} members.`;

//         if (members.length === 0) {
//             membersGrid.innerHTML = '<p class="no-results" style="text-align: center; grid-column: 1 / -1;">No members found matching your criteria.</p>';
//             return;
//         }

//         members.forEach(member => {
//             const card = document.createElement('div');
//             card.className = 'member-card';

//             const projects = [member['PROJECT 1'], member['PROJECT 2']].filter(p => p).map(p => 
//                 `<span class="project-tag">${p.trim()}</span>`
//             ).join('');

//             card.innerHTML = `
//                 <div class="card-header">
//                     <h3>${member['FULL NAME'].trim()}</h3>
//                     <span class="reg-no">${member['REGISTRATION NUMBER'].trim()}</span>
//                 </div>
//                 <div class="card-body">
//                     <p><strong>Department:</strong> ${member.DEPARTMENT || 'N/A'}</p>
//                     <p><strong>Programme:</strong> ${member.PROGRAMME?.trim() || 'N/A'}</p>
//                     <p><strong>Year:</strong> ${member['YEAR OF STUDY'] || 'N/A'}</p>
//                     <p><strong>Contact:</strong> ${member['PHONE ']?.trim() || 'N/A'}</p>
//                 </div>
//                 <div class="card-footer">
//                     ${projects || '<span class="project-tag">No Projects Assigned</span>'}
//                 </div>
//             `;
//             membersGrid.appendChild(card);
//         });
//     };

//     // --- Main Filter Logic ---
//     const filterMembers = () => {
//         const searchTerm = searchInput.value.toLowerCase();
//         const selectedDept = departmentFilter.value;
//         const selectedProj = projectFilter.value;
//         const selectedYear = yearFilter.value;

//         const filteredMembers = membersData.filter(member => {
//             // Basic checks for all members
//             const nameMatch = member['FULL NAME']?.toLowerCase().includes(searchTerm);
//             const regNoMatch = member['REGISTRATION NUMBER']?.toLowerCase().includes(searchTerm);
//             const searchMatch = nameMatch || regNoMatch;

//             const yearMatch = !selectedYear || member['YEAR OF STUDY'] === selectedYear;

//             // If the basic search or year doesn't match, exclude them immediately.
//             if (!searchMatch || !yearMatch) {
//                 return false;
//             }

//             // --- SPECIAL RULES ---
//             const isBoardMember = member.DEPARTMENT === 'BOARDS';
//             const isLead = member.DEPARTMENT?.toUpperCase().includes('LEAD');

//             // Rule 1: Board members ignore department and project filters.
//             if (isBoardMember) {
//                 return true;
//             }

//             // Rule 2: Department Leads ignore the project filter.
//             const deptMatch = !selectedDept || member.DEPARTMENT === selectedDept;
//             if (isLead) {
//                 return deptMatch; // Only check department match for leads
//             }

//             // --- REGULAR MEMBER FILTERING ---
//             // A regular member must match department and project filters if they are selected.
            
//             // Fixed project match logic
//             const project1 = member['PROJECT 1']?.replace(/ LEADS?/, '').trim();
//             const project2 = member['PROJECT 2']?.trim();
//             const projectMatch = !selectedProj || project1 === selectedProj || project2 === selectedProj;

//             return deptMatch && projectMatch;
//         });

//         displayMembers(filteredMembers);
//     };

//     // --- Reset all filters ---
//     const resetFilters = () => {
//         searchInput.value = '';
//         departmentFilter.value = '';
//         projectFilter.value = '';
//         yearFilter.value = '';
//         filterMembers();
//     };

//     // --- Event Listeners ---
//     searchInput.addEventListener('input', filterMembers);
//     departmentFilter.addEventListener('change', filterMembers);
//     projectFilter.addEventListener('change', filterMembers);
//     yearFilter.addEventListener('change', filterMembers);
//     resetButton.addEventListener('click', resetFilters);

//     // --- Initial setup ---
//     populateFilters();
//     displayMembers(membersData);
// });