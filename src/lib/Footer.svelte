<script>
    import { icons } from "./icons";
</script>

<footer>
    <div class="contact">
        <h3>Contact me</h3>
        <a href="https://t.me/olesno00">
            <img src={icons[1].link} alt="telegram" />
        </a>
        <a href="https://www.discordapp.com/users/802629317728665640">
            <img src={icons[2].link} alt="discord" />
        </a>
        <!-- <a href="https://www.linkedin.com/in/ole-martin-snoen-86625a21a/">
            <img src={icons[3].link} alt="linkedin" />
        </a> -->
        <a href="mailto: olesnoen@gmail.com">
            <img src={icons[4].link} alt="gmail" />
        </a>
    </div>
    <div class="copyright">
        <p>&copy Ole Martin Snoen 2023</p>
    </div>
</footer>

<style>
    footer {
    }
    .contact h3 {
        width: 100%;
        margin: auto;
        text-align: center;
    }
    .contact img {
        height: 2rem;
    }
    .contact {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 50%;
        margin: auto;
    }
    .copyright {
        display: flex;
        place-content: center;
        margin-top: 1rem;
    }
    @media (max-width: 650px) {
        .contact {
            width: 100%;
        }
    }
</style>
