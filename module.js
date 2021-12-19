function Change_SystemBody (List)
{
    let Path;
    if (List.value != "")
        Path = "Images/" + List.value + ".jpg";
    else
        Path = "Images/Solar System.jpg";

    document.getElementById("Image").src = Path;
    HumanMass_KeyUp (Human_Mass);
}


function HumanMass_KeyUp (Textbox)
{
    let W;
    if (Textbox.value != "")
        W = parseFloat (Textbox.value);
    else
        W = 0.0;
    
    List_Value = document.getElementById("System_Body").value.toString ();
    txtWeight = document.getElementById("Weight");
    
    switch (List_Value)
    {
        case "Sun":
            txtWeight.textContent = "On the sun, you weigh is equivalent to " + 
                                    (W * 274.13/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Mercury":
            txtWeight.textContent = "On Mercury, you weigh is equivalent to " + 
            (W * 3.61/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Venus":
            txtWeight.textContent = "On Venus, you weigh is equivalent to " + 
            (W * 8.83/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Earth":
            txtWeight.textContent = "On Earth, you weigh is equivalent to " + 
            W.toFixed(2).toString() + " kg.";
            break;
        case "Mars":
            txtWeight.textContent = "On Mars, you weigh is equivalent to " + 
            (W * 3.75/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Jupiter":
            txtWeight.textContent = "On Jupiter, you weigh is equivalent to " + 
            (W * 26.0/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Saturn":
            txtWeight.textContent = "On Saturn, you weigh is equivalent to " + 
            (W * 11.2/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Uranus":
            txtWeight.textContent = "On Uranus, you weigh is equivalent to " + 
            (W * 10.5/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Neptune":
            txtWeight.textContent = "On Neptune, you weigh is equivalent to " + 
            (W * 13.3/9.8).toFixed(2).toString() + " kg.";
            break;
        case "Pluto":
            txtWeight.textContent = "On Pluto, you weigh is equivalent to " + 
            (W * 0.61/9.8).toFixed(2).toString() + " kg.";
            break;
    }
}
